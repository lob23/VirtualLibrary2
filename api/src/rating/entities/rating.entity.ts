import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Rating {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  Rating_userId: string;

  @Column()
  @IsNotEmpty()
  Rating_bookId: string;

  @Column('int')
  @IsNotEmpty()
  Rating_rating: number;
}
