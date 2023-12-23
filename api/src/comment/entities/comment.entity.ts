import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Comment {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  Comment_userId: string;

  @Column()
  @IsNotEmpty()
  Comment_bookId: string;

  @Column()
  Comment_nestedId: string;

  @Column('datetime')
  @IsNotEmpty()
  Comment_time: Date;

  @Column('text')
  @IsNotEmpty()
  Comment_content: string;
}
