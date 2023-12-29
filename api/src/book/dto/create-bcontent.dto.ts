import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBContentDto {
  BContent_id: string;
  @IsString()
  @IsNotEmpty()
  BContent_content: string;
  BContent_pdf: string;
}
