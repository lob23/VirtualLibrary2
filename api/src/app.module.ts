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
import { ReportModule } from './report/report.module';
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { RoleModule } from './role/role.module';

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
    ReportModule,
    NotificationModule,
    AuthModule,
    RoleModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
