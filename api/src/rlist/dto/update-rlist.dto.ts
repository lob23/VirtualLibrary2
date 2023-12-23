import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRListDto } from './create-rlist.dto';

export class UpdateRListDto extends PartialType(
  // eslint-disable-next-line prettier/prettier
  OmitType(CreateRListDto, ['RList_userId', 'RList_bookId'] as const),
) {
  constructor(createRListDto: CreateRListDto) {
    super();
    // Assign values from createRListDto to the corresponding properties in UpdateRListDto
    Object.assign(this, createRListDto);
  }
}
