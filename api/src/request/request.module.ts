import { User } from 'src/users/entities/user.entity';
import { Module } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Request, User])],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}
