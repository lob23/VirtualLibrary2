import { IsString } from 'class-validator';

export class CreateBContentDto {
  @IsString()
  BContent_content: string;
  BContent_pdf: string;
}
