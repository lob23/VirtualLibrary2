import { IsJSON, IsNotEmpty } from 'class-validator';
import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class BContent {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  @IsJSON()
  BContent_content: string;
}
