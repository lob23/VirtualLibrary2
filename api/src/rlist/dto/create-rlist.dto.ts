import { IsNotEmpty } from 'class-validator';

export class CreateRListDto {
  
  RList_userId: string;
  @IsNotEmpty()
  RList_bookId: string;
  RList_currentPage: number;
}
