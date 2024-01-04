import { IsString } from 'class-validator';

export class CreateBContentDto {
  BContent_id: string;
  @IsString()
  BContent_content: string;
  BContent_pdf: string;
}
