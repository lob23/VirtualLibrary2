import { IsNotEmpty } from 'class-validator';

export class CreateRListDto {
  // RList_id: string;
  @IsNotEmpty()
  RList_userId: string;
  @IsNotEmpty()
  RList_bookId: string;
  RList_currentPage: number;

  constructor() {
    this.RList_currentPage = 0;
  }
}
