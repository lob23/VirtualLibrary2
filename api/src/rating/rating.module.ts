import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BDetail } from 'src/book/entities/bdetail.entity';
import { User } from 'src/users/entities/user.entity';
import { Rating } from './entities/rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BDetail, User, Rating])],
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingModule {}
