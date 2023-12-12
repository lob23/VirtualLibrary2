/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { BContent } from './entities/bcontent.entity';
import { BDetail } from './entities/bdetail.entity';
import { UpdateBDetailDto } from './dto/update-bdetail.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BDetail)
    private readonly bDetailRepository: Repository<BDetail>,
    @InjectRepository(BContent)
    private readonly bContentRepository: Repository<BContent>,
  ) {}

  async findAll(): Promise<BDetail[]> {
    return this.bDetailRepository.find();
  }

  async findById(id: string): Promise<BDetail | undefined> {
    return this.bDetailRepository.findOne({ where: { _id: new ObjectId(id) } });
  }

  async create(createBookDto: CreateBookDto): Promise<BDetail> {

    // Extract content data from DTO
    const contentDto = createBookDto.BContent_content;

    // Create a new BContent entity
    const bContent = this.bContentRepository.create(contentDto);

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

  async update(id: string, updateBDetailDto: UpdateBDetailDto ): Promise<BDetail | undefined> {
    await this.bDetailRepository.update(id, updateBDetailDto);
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    const bDetail = await this.findById( id );
    await this.bContentRepository.delete( bDetail.BDetail_contentId );
    await this.bDetailRepository.delete(id);
  }
}