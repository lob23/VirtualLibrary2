// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipeBuilder, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-Book.dto';
import { UpdateBDetailDto } from './dto/update-bdetail.dto';
import { UpdateBContentDto } from './dto/update-bcontent.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { BContent } from './entities/bcontent.entity';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('createBook')
  async createBook(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.create(createBookDto);
  }

  @Get('dev')
  async getDev() {
    const response = await this.findAllBDetail();
    const result: {
      _id: string;
      BDetail_title: string;
      BDetail_status: string;
      BDetail_authorID: string;
    }[] = response.map(
      ({ _id, BDetail_title, BDetail_status, BDetail_authorID }) => ({
        _id: _id.toString(),
        BDetail_title,
        BDetail_status,
        BDetail_authorID,
      }),
    );
    return result;
  }

  @Get()
  async findAllBDetail() {
    return await this.bookService.findAll();
  }

  @Get('getComposingList/:id')
  async getComposingList(@Param('id') id: string) {
    const result = await this.bookService.getComposingList(id);
    return result;
  }

  @Get('getBDetailByAuthorID/:id')
  async getBDetailByAuthorID(@Param('id') id: string) {
    const result = await this.bookService.findByAuthorId(id);
    return result;
  }

  @Get('getBDetail/:id')
  async getBDetailById(@Param('id') id: string) {
    const result = await this.bookService.findById(id);
    return result;
  }

  // Get BContent by id of BDetail
  @Get('getBContent/:id')
  async getBContentById(@Param('id') id: string): Promise<BContent | null> {
    const result = await this.bookService.getBContent(id);
    return result;
  }

  @Get('getListByStatus/:st')
  async getListByStatus(@Param('st') st: string) {
    const result = await this.bookService.getListByStatus(st.toLowerCase());
    return result;
  }

  @Patch('updateBDetail/:id')
  async update(
    @Param('id') id: string,
    @Body() updateBDetailDto: UpdateBDetailDto,
  ) {
    return await this.bookService.update(id, updateBDetailDto);
  }

  // Update by id of BDetail
  @Patch('updateBContent/:id')
  async updateBContent(
    @Param('id') id: string,
    @Body() updateBContentDto: UpdateBContentDto,
  ) {
    return await this.bookService.updateBContent(id, updateBContentDto);
  }

  @Patch('updateStatus')
  async updateStatus(
    @Query('BDetail_id') BDetail_id: string,
    @Query('status') status: string,
  ) {
    return await this.bookService.updateStatus(BDetail_id, status);
  }

  @Patch('updateDescription')
  async updateDescription(
    @Query('BDetail_id') BDetail_id: string,
    @Query('description') description: string,
  ) {
    return await this.bookService.updateDescription(BDetail_id, description);
  }


  // Router for upload user avatar
  @UseInterceptors(FileInterceptor('file'))
  @Patch('updateBDetailImage/:id')
  updateAvatar(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'png' })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    return this.bookService.updateBDetailImage(id, file);
  }

  @Get('retrievePDF/:id')
  async retrievePDF(@Param('id') id: string) {
    const result = await this.bookService.retrievePDF(id);
    return result;
  }

  // Router for upload user avatar
  @UseInterceptors(FileInterceptor('file'))
  @Patch('updatePDF/:id')
  updatePDF(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'pdf' })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    return this.bookService.updatePDF(id, file);
  }

  @Delete('deleteBook/:id')
  async remove(@Param('id') id: string) {
    return await this.bookService.remove(id);
  }
}
