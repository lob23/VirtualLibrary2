import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BDetail } from 'src/book/entities/bdetail.entity';
import { User } from 'src/users/entities/user.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BDetail, User, Comment])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
