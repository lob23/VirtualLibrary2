import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(
  OmitType(CreateCommentDto, [
    'Comment_userId',
    'Comment_bookId',
    'Comment_nestedId',
  ] as const),
) {}
