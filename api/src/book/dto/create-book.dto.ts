import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  BDetail_title: string;
  @IsNotEmpty()
  BDetail_genre: string;
  @IsNotEmpty()
  BDetail_authorID: string;
  @IsString()
  @IsNotEmpty()
  @IsEnum(['english', 'vietnamese'])
  BDetail_language: string;
  BDetail_createdDay: string;
  BDetail_publishedDay: string;
  BDetail_description: string;

  BContent_content: string;
}
