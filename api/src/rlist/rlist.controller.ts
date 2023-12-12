// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RListService } from './rlist.service';
import { CreateRListDto } from './dto/create-rlist.dto';
import { UpdateRListDto } from './dto/update-rlist.dto';

@Controller('rlist')
export class RListController {
  constructor(private readonly rListService: RListService) {}

  @Post()
  create(@Body() createRListDto: CreateRListDto) {
    return this.rListService.create(createRListDto);
  }

  @Get()
  findAll() {
    return this.rListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rListService.findByUserId(id);
  }

  @Patch()
  update(@Body() updateRListDto: UpdateRListDto) {
    return this.rListService.update(updateRListDto);
  }

  @Delete(':userId/:bookId')
  remove(@Param() params: { userId: string; bookId: string }) {
    const { userId, bookId } = params;
    return this.rListService.remove(userId, bookId);
  }
}
