import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Notification {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  Notification_senderId: string;

  @Column()
  @IsNotEmpty()
  Notification_receiverId: string;

  @Column()
  @IsNotEmpty()
  Notification_message: string;

  @Column()
  @IsNotEmpty()
  Notification_time: Date;
}
