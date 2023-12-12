import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  User_name: string;

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
  User_authenticationLevel: number;

  @Column({ nullable: false })
  User_loginName: string;

  @Column({ nullable: false })
  User_password: string;
}
