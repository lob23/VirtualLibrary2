// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, BadRequestException } from '@nestjs/common';

import { RListService } from './rlist.service';
import { CreateRListDto } from './dto/create-rlist.dto';
import { UpdateRListDto } from './dto/update-rlist.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Controller('rlist')
export class RListController {
  constructor(private readonly rListService: RListService) {}

  // SELF
  @Post('createRList')
  async create(@Req() createRListDto: Request) {
    const createBookDtoTemp = await plainToClass(CreateRListDto, createRListDto.body);

    const errors = await validate(createBookDtoTemp);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    createBookDtoTemp.RList_userId = createRListDto['user'].sub;

    return await this.rListService.create(createBookDtoTemp);
  }

  // DEPRECATED
  @Get()
  async findAll() {
    return await this.rListService.findAll();
  }

  // SELF
  @Get('getRList')
  async findOne(@Req() id: Request) {
    return await this.rListService.findByUserId(id['user'].sub);
  }

  // SELF
  @Get('getPage')
  async getPage(
    @Req() userID: Request,
    @Query('bookId') bookId: string,
  ) {
    const result = await this.rListService.findBoth(userID['user'].sub, bookId);
    return result.RList_currentPage;
  }

  // SELF
  @Patch()
  async update(
    @Req() userId: Request,
    @Query('bookId') bookId: string,
    @Body() updateRListDto: UpdateRListDto,
  ) {
    return await this.rListService.update(userId['user'].sub, bookId, updateRListDto);
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
