// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RListService } from './rlist.service';
import { CreateRListDto } from './dto/create-rlist.dto';
import { UpdateRListDto } from './dto/update-rlist.dto';

@Controller('rlist')
export class RListController {
  constructor(private readonly rListService: RListService) {}

  @Post()
  async create(@Body() createRListDto: CreateRListDto) {
    return await this.rListService.create(createRListDto);
  }

  @Get()
  async findAll() {
    return await this.rListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.rListService.findByUserId(id);
  }

  @Patch()
  async update(@Body() updateRListDto: UpdateRListDto) {
    return await this.rListService.update(updateRListDto);
  }

  @Delete('deleteRList')
  async remove(
    @Query('userId') userId: string,
    @Query('bookId') bookId: string,
  ) {
    return await this.rListService.remove(userId, bookId);
  }

  @Delete('deleteRListByUserId')
  async removeByUserId(@Query('userId') userId: string) {
    return await this.rListService.removeByUserId(userId);
  }
}
