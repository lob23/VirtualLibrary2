// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete, Req, BadRequestException } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  // role: admin
  @Get()
  getAllRequest() {
    return this.requestService.getAllRequest();
  }

  // role: admin
  @Get('getRequest/:id')
  getRequest(@Param('id') id: string) {
    return this.requestService.getRequest(id);
  }

  // role: admin
  @Get('getAuthorInfo/:id')
  getAuthor(@Param('id') id: string) {
    return this.requestService.getRequestInfo(id);
  }

  // SELF
  // role: user
  @Post('createRequest')
  async createRequest(@Req() createRequestDto: Request) {
    const createRequestDtoTemp = await plainToClass(CreateRequestDto, createRequestDto.body);

    const errors = await validate(createRequestDtoTemp);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');

    }
    createRequestDtoTemp.Request_userId = createRequestDto['user'].sub;
    return this.requestService.createRequest(createRequestDtoTemp);
  }

  // role: admin
  @Patch('acceptRequest/:id')
  acceptRequest(@Param('id') id: string) {
    return this.requestService.acceptedRequest(id);
  }

  // role: admin
  @Delete('deleteRequest/:id')
  deleteRequest(@Param('id') id: string) {
    this.requestService.deleteRequest(id);
  }
}
