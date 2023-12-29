import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['User_email'] as const),
) {
  constructor() {
    super();
    // Avoid calling the constructor of CreateUserDto
    delete this.User_dob;
    delete this.User_phone;
    delete this.User_address;
    delete this.User_image;
  }
}
