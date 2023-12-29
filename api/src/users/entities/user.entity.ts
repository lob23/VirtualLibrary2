import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Exclude, Transform } from 'class-transformer';

@Entity()
export class User {
  @ObjectIdColumn()
  @Transform(({ value }) => value.toHexString(), { toPlainOnly: true })
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

  @Exclude()
  @Column({ nullable: false, default: false })
  User_verification: boolean;

  @Exclude()
  @Column({ nullable: false, default: 1 })
  User_authenticationLevel: number;

  @Column()
  User_image: string;

  @Exclude()
  @Column({ nullable: false })
  User_loginName: string;

  @Exclude()
  @Column({ nullable: false })
  User_password: string;
}
