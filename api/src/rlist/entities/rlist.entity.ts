import { IsNotEmpty } from 'class-validator';
import { Entity, Column, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class RList {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  RList_userId: string;

  @Column()
  @IsNotEmpty()
  RList_bookId: string;

  @Column()
  RList_currentPage: number;
}
