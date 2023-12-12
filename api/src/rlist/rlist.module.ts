import { Module } from '@nestjs/common';
import { RListService } from './rlist.service';
import { RListController } from './rlist.controller';
import { RList } from './entities/rlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { BDetail } from 'src/book/entities/bdetail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BDetail, RList, User])],
  controllers: [RListController],
  providers: [RListService],
})
export class RListModule {}
