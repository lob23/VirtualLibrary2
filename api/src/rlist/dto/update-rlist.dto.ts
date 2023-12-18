import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRListDto } from './create-rlist.dto';

export class UpdateRListDto extends PartialType(
  OmitType(CreateRListDto, ['RList_id'] as const),
) {
  constructor(createRListDto: CreateRListDto) {
    super();
    // Assign values from createRListDto to the corresponding properties in UpdateRListDto
    Object.assign(this, createRListDto);
  }
}
