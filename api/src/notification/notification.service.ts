import { User } from 'src/users/entities/user.entity';
import { ObjectId } from 'mongodb';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Notification } from './entities/notification.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllNotify(): Promise<Notification[]> {
    const result = await this.notificationRepository.find();
    return result;
  }

  async getNotify(id: string): Promise<Notification | null> {
    const result = await this.notificationRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
    return result;
  }

  async getNotifyList(userId: string): Promise<Notification[]> {
    const notifyList = await this.notificationRepository.find({
      where: { Notification_receiverId: userId },
    });
    const result = notifyList.sort(
      (a, b) => b.Notification_time.getTime() - a.Notification_time.getTime(),
    );
    return result;
  }

  async createNotify(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const sender = await this.userRepository.findOne({
      where: { _id: new ObjectId(createNotificationDto.Notification_senderId) },
    });

    if (!sender) throw new Error('This sender does not exist');

    const receiver = await this.userRepository.findOne({
      where: {
        _id: new ObjectId(createNotificationDto.Notification_receiverId),
      },
    });

    if (!receiver) throw new Error('This sender does not exist');

    const newNotify = this.notificationRepository.create({
      ...createNotificationDto,
      Notification_time: new Date(),
    });

    return await this.notificationRepository.save(newNotify);
  }

  async deleteNotify(id: string): Promise<void> {
    await this.notificationRepository.delete(id);
  }
}
