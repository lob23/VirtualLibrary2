import { IsNotEmpty } from 'class-validator';

export class CreateRequestDto {
  Request_userId: string;
  Request_motivation: string;
}
