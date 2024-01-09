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

  async findBoth(userId: string, bookId: string): Promise<RList | null> {
    const result = await this.rListRepository.findOne({
      where: {
        RList_userId: userId,
        RList_bookId: bookId,
      },
    });
    return result;
  }

  async create(createRListDto: CreateRListDto): Promise<RList | null> {
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

    const rlistDetail = await this.rListRepository.findOne({
      where: {
        RList_userId: createRListDto.RList_userId,
        RList_bookId: createRListDto.RList_bookId
      },
    });

    if (rlistDetail) return null;

    // const result = await this.update(new UpdateRListDto(createRListDto));
    const result = await this.update(
      createRListDto.RList_userId,
      createRListDto.RList_bookId,
      { RList_currentPage: createRListDto.RList_currentPage },
    );
    if (result) return result;

    const newRList = await this.rListRepository.create(createRListDto);

    return await this.rListRepository.save(newRList);
  }

  // eslint-disable-next-line prettier/prettier
  async update(userId: string, bookId: string, updateRListDto: UpdateRListDto): Promise<RList | null> {
    const update = await this.rListRepository.update(
      {
        RList_userId: userId,
        RList_bookId: bookId,
      },
      updateRListDto,
    );
    if (update.affected === 0) return null;
    const result = this.findBoth(userId, bookId);
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
