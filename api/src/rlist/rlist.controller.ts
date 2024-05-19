// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RListService } from './rlist.service';
import { CreateRListDto } from './dto/create-rlist.dto';
import { UpdateRListDto } from './dto/update-rlist.dto';

@Controller('rlist')
export class RListController {
  constructor(private readonly rListService: RListService) {}

  // SELF
  @Post('createRList')
  async create(@Body() createRListDto: CreateRListDto) {
    return await this.rListService.create(createRListDto);
  }

  // DEPRECATED
  @Get()
  async findAll() {
    return await this.rListService.findAll();
  }

  // SELF
  @Get('getRList/:id')
  async findOne(@Param('id') id: string) {
    return await this.rListService.findByUserId(id);
  }

  // SELF
  @Get('getPage')
  async getPage(
    @Query('userId') userId: string,
    @Query('bookId') bookId: string,
  ) {
    const result = await this.rListService.findBoth(userId, bookId);
    return result.RList_currentPage;
  }

  // SELF
  @Patch()
  async update(
    @Query('userId') userId: string,
    @Query('bookId') bookId: string,
    @Body() updateRListDto: UpdateRListDto,
  ) {
    return await this.rListService.update(userId, bookId, updateRListDto);
  }

  // DEPRECATED
  @Delete('deleteRList')
  async remove(
    @Query('userId') userId: string,
    @Query('bookId') bookId: string,
  ) {
    return await this.rListService.remove(userId, bookId);
  }

  // DEPRECATED
  @Delete('deleteRListByUserId/:id')
  async removeByUserId(@Param('id') id: string) {
    return await this.rListService.removeByUserId(id);
  }
}
