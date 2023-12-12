import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class RList {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  RList_userId: string;

  @Column()
  RList_bookId: string;

  @Column()
  RList_currentPage: number;
}
