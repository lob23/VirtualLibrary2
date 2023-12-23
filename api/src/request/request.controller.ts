// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  getAllRequest() {
    return this.requestService.getAllRequest();
  }

  @Get('getRequest/:id')
  getRequest(@Param('id') id: string) {
    return this.requestService.getRequest(id);
  }

  @Get('getAuthorInfo/:id')
  getAuthor(@Param('id') id: string) {
    return this.requestService.getRequestInfo(id);
  }

  @Post('createRequest')
  createRequest(@Body() createRequestDto: CreateRequestDto) {
    return this.requestService.createRequest(createRequestDto);
  }

  @Patch('acceptRequest/:id')
  acceptRequest(@Param('id') id: string) {
    return this.requestService.acceptedRequest(id);
  }

  @Delete('deleteRequest/:id')
  deleteRequest(@Param('id') id: string) {
    this.requestService.deleteRequest(id);
  }
}
