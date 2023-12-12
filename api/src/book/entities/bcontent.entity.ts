import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class BContent {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column('json') // Store content as JSON/BSON
  BContent_content: Record<string, any>;
}
