import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { RListModule } from './rlist/rlist.module';
import { RatingModule } from './rating/rating.module';
import { CommentModule } from './comment/comment.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    BookModule,
    RListModule,
    RatingModule,
    CommentModule,
    RequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
