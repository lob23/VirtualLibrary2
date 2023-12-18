import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  BDetail_id: string;
  @IsNotEmpty()
  BDetail_title: string;
  @IsNotEmpty()
  BDetail_genre: string;
  @IsNotEmpty()
  BDetail_authorID: string;
  BDetail_averageRating: number;
  @IsNotEmpty()
  BDetail_accepted: boolean;
  @IsNotEmpty()
  BContent_content: string;
}
