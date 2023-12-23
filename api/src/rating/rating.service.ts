import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';
import { DeleteResult, Repository } from 'typeorm';
import { BDetail } from 'src/book/entities/bdetail.entity';
import { User } from 'src/users/entities/user.entity';
import { CreateRatingDto } from './dto/create-rating.dto';
import { ObjectId } from 'mongodb';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Injectable()
export class RatingService {
  // Constructor
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
    @InjectRepository(BDetail)
    private readonly bDetailRepository: Repository<BDetail>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findBoth(userId: string, bookId: string): Promise<Rating | null> {
    const result = await this.ratingRepository.findOne({
      where: {
        Rating_userId: userId,
        Rating_bookId: bookId,
      },
    });
    return result;
  }

  async getRating(bookId: string): Promise<number | null> {
    const ratingList = await this.ratingRepository.find({
      where: { Rating_bookId: bookId },
    });

    if (ratingList.length == 0) return null;

    let result = 0;
    for (const rating of ratingList) result += rating.Rating_rating;
    result /= ratingList.length;
    return result;
  }

  async create(createRatingDto: CreateRatingDto): Promise<Rating | null> {
    // Check whether the user is exist or not
    const existingUser = await this.userRepository.findOne({
      where: { _id: new ObjectId(createRatingDto.Rating_userId) },
    });

    if (!existingUser) throw new Error('This user does not exist');

    // Check whether the book is valid
    const bDetail = await this.bDetailRepository.findOne({
      where: { _id: new ObjectId(createRatingDto.Rating_bookId) },
    });

    if (!bDetail) throw new Error('This book does not exist');

    const result = await this.update(
      createRatingDto.Rating_userId,
      createRatingDto.Rating_bookId,
      { Rating_rating: createRatingDto.Rating_rating },
    );
    if (result) return result;

    const newRating = await this.ratingRepository.create(createRatingDto);

    return await this.ratingRepository.save(newRating);
  }

  // eslint-disable-next-line prettier/prettier
    async update(userId: string, bookId: string, updateRatingDto: UpdateRatingDto): Promise<Rating | null> {
    const update = await this.ratingRepository.update(
      {
        Rating_userId: userId,
        Rating_bookId: bookId,
      },
      updateRatingDto,
    );
    if (update.affected === 0) return null;
    const result = this.findBoth(userId, bookId);
    return result;
  }

  async remove(userId: string, bookId: string): Promise<DeleteResult> {
    return await this.ratingRepository.delete({
      Rating_userId: userId,
      Rating_bookId: bookId,
    });
  }

  async removeByBookId(bookId: string): Promise<DeleteResult> {
    return await this.ratingRepository.delete({
      Rating_bookId: bookId,
    });
  }
}
