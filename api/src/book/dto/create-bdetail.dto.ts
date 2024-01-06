import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateBDetailDto {
  @IsString()
  @IsNotEmpty()
  BDetail_title: string;

  @IsString()
  @IsNotEmpty()
  BDetail_genre: string;

  @IsString()
  @IsNotEmpty()
  BDetail_authorID: string;

  BDetail_averageRating: number;

  @IsString()
  @IsNotEmpty()
  BDetail_contentId: string;

  BDetail_image: string;

  BDetail_createdDay: string;
  BDetail_publishedDay: string | null;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['english', 'vietnamese'])
  BDetail_language: string;

  BDetail_description: string;
}
