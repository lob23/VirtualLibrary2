// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';

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
  createRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.createRequest(createRequestDto);
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
