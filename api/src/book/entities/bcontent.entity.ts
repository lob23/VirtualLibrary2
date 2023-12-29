import { IsNotEmpty } from 'class-validator';
import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class BContent {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  BContent_content: string;

  @Column()
  BContent_pdf: string;
}
