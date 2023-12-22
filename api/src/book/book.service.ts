/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ObjectId } from 'mongodb';
import { BDetail } from './entities/bdetail.entity';
import { BContent } from './entities/bcontent.entity';
import { UpdateBDetailDto } from './dto/update-bdetail.dto';
import { UpdateBContentDto } from './dto/update-bcontent.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BDetail)
    private readonly bDetailRepository: Repository<BDetail>,
    @InjectRepository(BContent)
    private readonly bContentRepository: Repository<BContent>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<BDetail[]> {
    return this.bDetailRepository.find();
  }

  async findById(id: string): Promise<BDetail | null> {
    const result = await this.bDetailRepository.findOne({ where: { _id: new ObjectId(id) } });
    console.log(result);
    return result;
  }

  async getBContent(id: string): Promise<string> {
    const bDetail = await this.findById(id);
    if( !bDetail ) return 'This book does not exist!!!';
    const result = await this.bContentRepository.findOne({ where: { _id: new ObjectId(bDetail.BDetail_contentId) } });
    return result.BContent_content;
  }

  async create(createBookDto: CreateBookDto): Promise<BDetail> {

    const existingUser = await this.userRepository.findOne({
      where: { _id: new ObjectId(createBookDto.BDetail_authorID) },
    });

    if (!existingUser || existingUser.User_authenticationLevel != 2 ) throw new Error('This author does not exist');

    // Create a new BContent entity
    const bContent = this.bContentRepository.create(createBookDto);

    // Save BContent entity to the database
    const savedBContent = await this.bContentRepository.save(bContent);

    // Create a new Book entity with the associated BContent entity
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newBook = this.bDetailRepository.create({
      ...createBookDto,
      BDetail_contentId: savedBContent._id,
    });

    return this.bDetailRepository.save(newBook);
  }

  async update(id: string, updateBDetailDto: UpdateBDetailDto ): Promise<BDetail | null> {
    await this.bDetailRepository.update(id, updateBDetailDto);
    return this.findById(id);
  }

  async updateBContent(id: string, updateBContentDto: UpdateBContentDto): Promise<UpdateResult> {
    const bDetail = await this.findById( id );
    const result = await this.bContentRepository.update( bDetail.BDetail_contentId, updateBContentDto);
    return result;
  }

  async updateBDetailImage(id: string, file: Express.Multer.File): Promise<BDetail | null> {
    await this.bDetailRepository.update( id, { BDetail_image: file.buffer.toString('base64') } );
    return await this.findById(id);
  }

  async updateVerified(id: string, status: string): Promise<BDetail | null> {

    const validStatus: string[] = ['accepted', 'rejected', 'editing', 'reading']
    status = status.toLowerCase();
    if(!validStatus.includes(status)) throw new Error('This status is not valid status. Current status: ' + status);

    const updateDto: { BDetail_verified: string; BDetail_publishedDay: string | undefined } = { BDetail_verified: status, BDetail_publishedDay: null };
    if (status === 'accepted') updateDto.BDetail_publishedDay = getCurrentDay();

    await this.bDetailRepository.update(id, updateDto);
    return await this.findById(id);
  }

  async remove(id: string): Promise<void> {
    const bDetail = await this.findById( id );
    await this.bContentRepository.delete( bDetail.BDetail_contentId );
    await this.bDetailRepository.delete(id);
  }
}

const getCurrentDay = (): string => {
  const formatter = new Intl.DateTimeFormat( 'en-US', { timeZone: 'Asia/Bangkok', year: 'numeric', month: '2-digit', day: '2-digit' });
  const currentDay = formatter.format(new Date());
  return currentDay;
}