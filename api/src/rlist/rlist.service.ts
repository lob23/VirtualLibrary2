import { Injectable } from '@nestjs/common';
import { CreateRListDto } from './dto/create-rlist.dto';
import { UpdateRListDto } from './dto/update-rlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RList } from './entities/rlist.entity';
import { BDetail } from 'src/book/entities/bdetail.entity';
import { DeleteResult, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class RListService {
  constructor(
    @InjectRepository(RList)
    private readonly rListRepository: Repository<RList>,
    @InjectRepository(BDetail)
    private readonly bDetailRepository: Repository<BDetail>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<RList[]> {
    return this.rListRepository.find();
  }

  async findByUserId(id: string): Promise<BDetail[] | undefined> {
    const rList = await this.rListRepository.find({
      where: { RList_userId: id },
    });

    const result: BDetail[] = [];
    for (const onReading of rList) {
      const bDetail = await this.bDetailRepository.findOne({
        where: { _id: new ObjectId(onReading.RList_bookId) },
      });

      if (bDetail) result.push(bDetail);
    }

    // Assuming you want to return the first element of the result array
    return result ? result : undefined;
  }

  async create(createRListDto: CreateRListDto): Promise<RList | any> {
    // Check whether the user is exist or not
    const existingUser = await this.userRepository.findOne({
      where: { _id: new ObjectId(createRListDto.RList_userId) },
    });

    if (!existingUser) throw new Error('This user does not exist');

    // Check whether the book is valid
    const bDetail = await this.bDetailRepository.findOne({
      where: { _id: new ObjectId(createRListDto.RList_bookId) },
    });

    if (!bDetail) throw new Error('This book does not exist');

    const result = await this.update(new UpdateRListDto(createRListDto));
    if (result) return result;

    const newRList = this.rListRepository.create(createRListDto);
    return await this.rListRepository.save(newRList);
  }

  // eslint-disable-next-line prettier/prettier
  async update(updateRListDto: UpdateRListDto): Promise<RList | undefined | any> {
    const update = await this.rListRepository.update(
      {
        RList_userId: updateRListDto.RList_userId,
        RList_bookId: updateRListDto.RList_bookId,
      },
      updateRListDto,
    );
    if (update.affected == 0) return undefined;
    const result = this.rListRepository.findOne({
      where: {
        RList_userId: updateRListDto.RList_userId,
        RList_bookId: updateRListDto.RList_bookId,
      },
    });
    return result;
  }

  async remove(userId: string, bookId: string): Promise<DeleteResult> {
    return await this.rListRepository.delete({
      RList_userId: userId,
      RList_bookId: bookId,
    });
  }

  async removeByUserId(userId: string): Promise<DeleteResult> {
    return await this.rListRepository.delete({
      RList_userId: userId,
    });
  }
}
