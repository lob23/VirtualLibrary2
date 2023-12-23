// eslint-disable-next-line prettier/prettier
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  // User_id: string;
  User_name: string;
  User_dob: Date;
  User_email: string;
  User_phone: string;
  User_address: string;
  User_image: string;
  @IsNotEmpty()
  User_verification: number;
  // @IsNotEmpty()
  // User_authenticationLevel: number;
  @IsString()
  @IsNotEmpty()
  User_loginName: string;
  @IsString()
  @IsNotEmpty()
  User_password: string;

  constructor() {
    this.User_name = null;
    this.User_dob = null;
    this.User_email = null;
    this.User_phone = null;
    this.User_address = null;
    this.User_image = null;
  }
}
