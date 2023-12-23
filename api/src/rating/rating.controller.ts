// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post('createRating')
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @Get('getRating/:id')
  async getRating(@Param('id') bookId: string): Promise<number | null> {
    const result = this.ratingService.getRating(bookId);
    if (result) return result;
    else return null;
  }

  @Patch('updateRating')
  async updateRating(
    @Query('userId') userId: string,
    @Query('bookId') bookId: string,
    @Body() updateRatingDto: UpdateRatingDto,
  ) {
    return await this.ratingService.update(userId, bookId, updateRatingDto);
  }

  @Delete('deleteRating')
  async remove(
    @Query('userId') userId: string,
    @Query('bookId') bookId: string,
  ) {
    return await this.ratingService.remove(userId, bookId);
  }

  @Delete('deleteByBookId/:id')
  async removeByBookId(@Param('id') bookId: string) {
    return await this.ratingService.removeByBookId(bookId);
  }
}
