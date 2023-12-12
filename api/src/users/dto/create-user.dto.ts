export class CreateUserDto {
  User_id: string;
  User_name: string;
  User_dob: Date;
  User_email: string;
  User_phone: string;
  User_address: string;
  User_verification: boolean;
  User_authenticationLevel: number;
  User_loginName: string;
  User_password: string;
}
