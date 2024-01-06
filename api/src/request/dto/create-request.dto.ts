import { IsNotEmpty } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty()
  Request_userId: string;
  Request_motivation: string;
}
