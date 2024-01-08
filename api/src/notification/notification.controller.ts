// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  getAllNotify() {
    const result = this.notificationService.getAllNotify();
    return result;
  }

  @Get('/getNotify/:id')
  getNotify(@Param('id') id: string) {
    const result = this.notificationService.getNotify(id);
    return result;
  }

  @Get('/getNotifyList/:userId')
  getNotifyList(@Param('userId') userId: string) {
    const result = this.notificationService.getNotifyList(userId);
    return result;
  }

  @Post('/createNotification')
  createNotification(@Body() createNotificationDto: CreateNotificationDto) {
    const result = this.notificationService.createNotify(createNotificationDto);
    return result;
  }

  @Delete('/deleteNotify/:id')
  deleteNotify(@Param('id') id: string) {
    this.notificationService.deleteNotify(id);
  }
}
