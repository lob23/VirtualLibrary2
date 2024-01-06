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
    return result;
  }

  async getBContent(id: string): Promise<string> {
    const bDetail = await this.findById(id);
    if( !bDetail ) return 'This book does not exist!!!';
    const result = await this.bContentRepository.findOne({ where: { _id: new ObjectId(bDetail.BDetail_contentId) } });
    return result.BContent_content;
  }

  async getComposingList(id: string): Promise<BDetail[] | null > {
    const composingList = await this.bDetailRepository.find({
      where: { 
        BDetail_authorID: id,
        BDetail_status: 'editing'
      }
    });
    return composingList;
  }

  async findByAuthorId(id: string): Promise<BDetail[] | null > {
    const bookList = await this.bDetailRepository.find({
      where: {
        BDetail_authorID: id
      }
    });
    return bookList;
  }

  async getListByStatus( status: string ): Promise<BDetail[]> {
    const stList = ['verified, rejected, waiting'];
    if(!stList.includes(status)) throw new Error('This status is not valid. Current status: ' + status)
    const result = await this.bDetailRepository.find({
      where: { BDetail_status: status }
    });
    return result
  }

  async create(createBookDto: CreateBookDto): Promise<BDetail> {

    const existingUser = await this.userRepository.findOne({
      where: { _id: new ObjectId(createBookDto.BDetail_authorID) },
    });

    if (!existingUser || existingUser.User_authenticationLevel != 2 ) throw new Error('This author does not exist');

    createBookDto.BDetail_title = createBookDto.BDetail_title.toUpperCase()
    createBookDto.BDetail_genre = createBookDto.BDetail_genre.toLowerCase()

   // Check if any BDetail has the same title (case-insensitive)
  const existingBDetailWithSameTitle = await this.bDetailRepository.findOne({
    where: {
      BDetail_title: createBookDto.BDetail_title,
    },
  });

  if (existingBDetailWithSameTitle) {
    throw new Error('A book with a similar title already exists.');
  }

    // Create a new BContent entity
    const bContent = this.bContentRepository.create(createBookDto);

    // Save BContent entity to the database
    const savedBContent = await this.bContentRepository.save(bContent);

    // Create a new Book entity with the associated BContent entity
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const published_date = new Date()

    const newBook = this.bDetailRepository.create({
      ...createBookDto,
      BDetail_contentId: savedBContent._id.toString(),
      BDetail_status: 'editing',
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

  async updatePDF(id: string, file: Express.Multer.File): Promise<void> {
    const bDetail = await this.findById( id );
    await this.bContentRepository.update( bDetail.BDetail_contentId, { BContent_pdf: file.buffer.toString('base64') } );
  }

  async retrievePDF(id: string) {
    const bDetail = await this.findById( id );
    const result = await this.bContentRepository.findOne({ where: { _id: new ObjectId(bDetail.BDetail_contentId)}});
    return result.BContent_pdf;
  }

  async updateStatus(id: string, status: string): Promise<BDetail | null> {

    const BDetail_publishedDay = (status === 'verified') ? getCurrentDay() : null;

    await this.bDetailRepository.update(id, { BDetail_status: status, BDetail_publishedDay: BDetail_publishedDay });
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
