import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
  Notification_senderId: string;

  @IsNotEmpty()
  @IsString()
  Notification_receiverId: string;

  @IsNotEmpty()
  @IsString()
  Notification_message: string;
}
