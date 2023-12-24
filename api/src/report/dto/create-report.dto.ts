import { IsNotEmpty } from 'class-validator';

export class CreateReportDto {
  @IsNotEmpty()
  Report_userId: string;
  @IsNotEmpty()
  Report_description: string;
}
