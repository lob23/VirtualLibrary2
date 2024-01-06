/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
// import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<User | null> {
    const result = await this.userRepository.findOne({ where: { _id: new ObjectId(id) } });
    return result;
  }

  async getByEmail(email: string): Promise<User | null> {
    const result = await this.userRepository.findOne({ where: { User_email: email } });
    return result;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {

    // Check whether the login name is exist or not
    const existingUser = await this.userRepository.findOne({
      where: { User_email: createUserDto.User_email },
    });

    if (existingUser) {
      throw new Error('This email is already existed');
    }

    // If not then create user
    const newUser = this.userRepository.create({
      ...createUserDto,
      User_authenticationLevel: 1,
    });
    return await this.userRepository.save(newUser);
  }

  async update(id: string, updateUserDto: UpdateUserDto ): Promise<User | null> {
    console.log(updateUserDto);
    await this.userRepository.update(id, updateUserDto);
    return await this.findById(id);
  }

  async updateAvatar(id: string, file: Express.Multer.File): Promise<User | null> {
    await this.userRepository.update( id, { User_image: file.buffer.toString('base64') } );
    return await this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}