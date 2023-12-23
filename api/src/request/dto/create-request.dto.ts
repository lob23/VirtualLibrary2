import { IsNotEmpty } from 'class-validator';

export class CreateRequestDto {
  @IsNotEmpty()
  Request_userId: string;
  Request_motivation: string;

  constructor() {
    this.Request_motivation =
      'My dream is becoming the most famous author on the world <3';
  }
}
