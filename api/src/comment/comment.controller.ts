// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, BadRequestException } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  // SELF
  // role: user or author
  @Post('createComment')
  async create(@Req() createCommentDto: Request) {

    const createCommentDtoTemp = await plainToClass(CreateCommentDto, createCommentDto.body);

    const errors = await validate(createCommentDtoTemp);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }

    createCommentDtoTemp.Comment_userId = createCommentDto['user'].sub;

    return this.commentService.createComment(createCommentDtoTemp);
  }

  @Get('getComment/:id')
  async getComment(@Param('id') bookId: string) {
    const result = await this.commentService.getCommentOfBook(bookId);
    return result;
  }

  // DEPRECATED
  @Get('getNestedComment/:id')
  getNestedComment(@Param('id') commentId: string) {
    return this.commentService.getNestedCommentOfComment(commentId);
  }

  // DEPRECATED
  @Patch('updateComment/:id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.updateContent(id, updateCommentDto);
  }

  // DEPRECATED
  @Delete('deleteComment/:id')
  remove(@Param('id') id: string) {
    return this.commentService.deleteComment(id);
  }
}
