import { Injectable } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}

  // Get function
  async getAllRequest(): Promise<Request[] | null> {
    const requestList = await this.requestRepository.find();
    return requestList;
  }

  async getRequest(id: string): Promise<Request | null> {
    const result = await this.requestRepository.findOne({
      where: { _id: new ObjectId(id) },
    });
    return result;
  }

  async getRequestInfo(id: string): Promise<User | null> {
    const request = await this.getRequest(id);

    if (!request) throw new Error('This request id is invalid');

    const result = await this.userRepository.findOne({
      where: { _id: new ObjectId(request.Request_userId) },
    });
    return result;
  }

  // Create function
  // eslint-disable-next-line prettier/prettier
  async createRequest(createRequestDto: CreateRequestDto): Promise<Request | null> {
    const referenceUser = await this.userRepository.findOne({
      where: { _id: new ObjectId(createRequestDto.Request_userId) },
    });

    if (!referenceUser || referenceUser.User_authenticationLevel >= 2)
      throw new Error(
        'User id is not valid. Current user: ' + referenceUser._id,
      );

    const newRequest = this.requestRepository.create(createRequestDto);
    return await this.requestRepository.save(newRequest);
  }

  // Update function
  async acceptedRequest(id: string): Promise<User | null> {
    const request = await this.getRequest(id);

    if (!request) throw new Error('This request id is invalid');

    // Update user
    await this.userRepository.update(request.Request_userId, {
      User_authenticationLevel: 2,
    });

    const result = await this.getRequestInfo(id);

    // Delete all remain request of this user
    await this.deleteRequestOfUser(request.Request_userId);

    return result;
  }

  // Delete functions
  async deleteRequest(id: string): Promise<void> {
    await this.requestRepository.delete(id);
  }

  async deleteRequestOfUser(id: string): Promise<void> {
    await this.requestRepository.delete({
      Request_userId: id,
    });
  }
}
