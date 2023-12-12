// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-Book.dto';
import { UpdateBDetailDto } from './dto/update-bdetail.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    console.log('Received CreateBookDto:', createBookDto);
    console.log('Received ContentDto:', createBookDto.BContent_content);
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBDetailDto: UpdateBDetailDto) {
    return this.bookService.update(id, updateBDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(id);
  }
}
