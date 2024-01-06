import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Entity, Column, ObjectIdColumn } from 'typeorm';

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

  constructor() {
    this.RList_currentPage = 0;
  }
}
