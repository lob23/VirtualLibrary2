import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Transform } from 'class-transformer';

@Entity()
export class User {
  @ObjectIdColumn()
  @Transform(({ value }) => value.toHexString(), { toPlainOnly: true })
  _id: ObjectId;

  @Column()
  User_firstname: string;

  @Column()
  User_lastname: string;

  @Column({ default: null })
  User_dob?: Date;

  @Column({ default: null })
  User_email: string;

  @Column({ default: null })
  User_phone: string;

  @Column({ default: null })
  User_address: string;

  @Column({ nullable: false, default: false })
  User_verification: boolean;

  @Column({ nullable: false, default: 1 })
  User_authorizationLevel: number;

  @Column()
  User_image: string;

  @Column({ nullable: false })
  User_password: string;

  constructor() {
    this.User_dob = null;
    this.User_phone = null;
    this.User_address = null;
    this.User_image = null;
  }
}
