/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BContent } from './entities/bcontent.entity';
import { BDetail } from './entities/bdetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BDetail]), TypeOrmModule.forFeature([BContent])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
