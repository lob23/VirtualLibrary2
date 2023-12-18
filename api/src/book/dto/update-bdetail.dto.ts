import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateBDetailDto } from './create-bdetail.dto';

export class UpdateBDetailDto extends PartialType(
  OmitType(CreateBDetailDto, ['BDetail_id'] as const),
) {}
