import { FileInterceptor } from '@nestjs/platform-express';
// eslint-disable-next-line prettier/prettier
import { UploadedFile, UseInterceptors, ParseFilePipeBuilder } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { classToPlain } from 'class-transformer';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    const result = await this.usersService.findAll();
    return classToPlain(result);
  }

  @Get('getUser/:id')
  findOne(@Param('id') id: string) {
    return classToPlain(this.usersService.findById(id));
  }

  @Get('getUserByEmail/:email')
  getByEmail(@Param('email') email: string) {
    return classToPlain(this.usersService.getByEmail(email));
  }

  @Patch('updateUser/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return classToPlain(this.usersService.update(id, updateUserDto));
  }

  // Router for upload user avatar
  @UseInterceptors(FileInterceptor('file'))
  @Patch('updateAvatar/:id')
  updateAvatar(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'png' })
        .build(),
    )
    file?: Express.Multer.File,
  ) {
    return this.usersService.updateAvatar(id, file);
  }

  @Delete('deleteUser/:id')
  remove(@Param('id') id: string) {
    this.usersService.remove(id);
  }
}
