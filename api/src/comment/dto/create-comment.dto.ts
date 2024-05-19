import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  Comment_userId: string;
  @IsNotEmpty()
  Comment_bookId: string;
  Comment_nestedId: string | null;
  @IsNotEmpty()
  Comment_content: string;
}
