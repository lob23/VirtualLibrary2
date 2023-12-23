import { User } from 'src/users/entities/user.entity';
import { RList } from './entities/rlist.entity';
import { Module } from '@nestjs/common';
import { BDetail } from 'src/book/entities/bdetail.entity';
import { RListService } from './rlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RListController } from './rlist.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BDetail, RList, User])],
  controllers: [RListController],
  providers: [RListService],
})
export class RListModule {}
