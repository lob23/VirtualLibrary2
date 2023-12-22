import { IsNotEmpty, IsString } from 'class-validator';
export class CreateBDetailDto {
  BDetail_id: string;
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
  @IsNotEmpty()
  BDetail_verified: string;
  @IsString()
  @IsNotEmpty()
  BDetail_contentId: string;
  BDetail_image: string;
  BDetail_publishedDay: string | null;

  constructor() {
    this.BDetail_averageRating = 0;
    this.BDetail_image = null;
    this.BDetail_publishedDay = null;
  }
}
