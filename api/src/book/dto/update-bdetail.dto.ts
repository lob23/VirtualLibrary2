import { PartialType } from '@nestjs/mapped-types';
import { CreateBDetailDto } from './create-bdetail.dto';

export class UpdateBDetailDto extends PartialType(CreateBDetailDto) {}
