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
  BDetail_verified: string;

  @Column()
  BDetail_contentId: ObjectId;

  @Column()
  BDetail_image: string;

  @Column()
  BDetail_publishedDay: string;
}
