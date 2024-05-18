import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { AuthLevelDto } from './dto/auth-level.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {
        
      }

    async getAuthLevel(userId: string) : Promise<AuthLevelDto> {
        const user = await this.userRepository.findOne({
            where: { _id: new ObjectId(userId) },
            select: ['User_authorizationLevel']
        });
        return { 
            User_authorizationLevel: user.User_authorizationLevel
        };
    }
}
