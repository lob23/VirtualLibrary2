import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRListDto } from './create-rlist.dto';

export class UpdateRListDto extends PartialType(
  OmitType(CreateRListDto, ['RList_userId', 'RList_bookId'] as const),
) {}
