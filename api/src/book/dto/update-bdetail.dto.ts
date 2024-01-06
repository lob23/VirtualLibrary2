import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateBDetailDto } from './create-bdetail.dto';

export class UpdateBDetailDto extends PartialType(
  OmitType(CreateBDetailDto, [
    'BDetail_language',
    'BDetail_authorID',
    'BDetail_contentId',
    'BDetail_publishedDay',
  ] as const),
) {
  BDetail_status: string;
}
