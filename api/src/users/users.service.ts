/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: string): Promise<User | any> {
    return this.userRepository.findOne({ where: { _id: new ObjectId(id) } });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {

    // Check whether the login name is exist or not
    const existingUser = await this.userRepository.findOne({
      where: { User_loginName: createUserDto.User_loginName },
    });

    if (existingUser) {
      throw new Error('Login name is already taken');
    }

    // If not then create user
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  async update(id: string, updateUserDto: UpdateUserDto ): Promise<User | undefined | any> {
    await this.userRepository.update(id, updateUserDto);
    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}