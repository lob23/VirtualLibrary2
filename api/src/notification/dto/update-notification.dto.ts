import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateNotificationDto } from './create-notification.dto';

export class UpdateNotificationDto extends PartialType(
  OmitType(CreateNotificationDto, [
    'Notification_senderId',
    'Notification_receiverId',
  ] as const),
) {}
