import { FileInterceptor } from '@nestjs/platform-express';
// eslint-disable-next-line prettier/prettier
import { UploadedFile, UseInterceptors, ParseFilePipeBuilder } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    console.log(`Number of users: ${result.length}`);
    console.log(result);
    return result;
  }

  @Get('getUser/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Patch('updateUser/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
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
    return this.usersService.remove(id);
  }
}
