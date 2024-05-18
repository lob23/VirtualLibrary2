import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class BDetail {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  BDetail_title: string;

  @Column()
  @IsNotEmpty()
  BDetail_genre: string;

  @Column()
  @IsNotEmpty()
  BDetail_authorID: string;

  @Column()
  BDetail_averageRating: number;

  @Column()
  @IsNotEmpty()
  BDetail_status: string;

  @Column()
  @IsNotEmpty()
  BDetail_contentId: string;

  @Column()
  BDetail_image: string;

  @Column()
  BDetail_createdDay: string;

  @Column()
  @IsNotEmpty()
  BDetail_publishedDay: string;

  @Column()
  @IsNotEmpty()
  BDetail_language: string;

  @Column('text')
  @IsNotEmpty()
  BDetail_description: string;

  constructor() {
    this.BDetail_averageRating = 0;
    this.BDetail_image = null;
    this.BDetail_publishedDay = null;
    this.BDetail_description = null;
  }
}
