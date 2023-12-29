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
  @IsEnum(['verified', 'reject', 'editing', 'waiting'])
  BDetail_status: string;
  @IsString()
  @IsNotEmpty()
  @IsEnum(['english', 'vietnamese'])
  BDetail_language: string;
  BDetail_description: string;

  @IsNotEmpty()
  BContent_content: string;
}
