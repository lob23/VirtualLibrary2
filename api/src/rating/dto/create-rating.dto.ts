import { IsNotEmpty } from 'class-validator';

export class CreateRatingDto {
  @IsNotEmpty()
  Rating_userId: string;
  @IsNotEmpty()
  Rating_bookId: string;
  @IsNotEmpty()
  Rating_rating: number;
}
