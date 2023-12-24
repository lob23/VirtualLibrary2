import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Report {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  @IsNotEmpty()
  Report_userId: string;

  @Column('text')
  @IsNotEmpty()
  Report_description: string;
}
