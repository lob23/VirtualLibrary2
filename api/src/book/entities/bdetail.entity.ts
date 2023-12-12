import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class BDetail {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  BDetail_title: string;

  @Column()
  BDetail_genre: string;

  @Column()
  BDetail_authorID: string;

  @Column()
  BDetail_averageRating: number;

  @Column()
  BDetail_accepted: boolean;

  @Column()
  BDetail_contentId: ObjectId;
}
