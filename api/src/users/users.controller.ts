import { FileInterceptor } from '@nestjs/platform-express';
// eslint-disable-next-line prettier/prettier
import { UploadedFile, UseInterceptors, ParseFilePipeBuilder, Query } from '@nestjs/common';
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';


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
    return result;
  }

  @Get('getUser/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Get('getUserByEmail/:email')
  getByEmail(@Param('email') email: string) {
    return this.usersService.getByEmail(email);
  }

  @Get('login/:email')
  async userLogin(
    @Param('email') email: string,
    @Query('password') password: string,
  ){

    const user = await this.usersService.getByEmail(email);

    if (user == undefined) return null;

    console.log("user ser: ", user);

    const compare = await bcrypt.compare(password, user.User_password);

    if (compare) {
      return user;
    }

    return null;
  }

  @Get('comment/:id')
  async getDev(@Param('id') id: string) {
    const response = await this.findOne(id);
    const result = { _id: response._id, User_lastname: response.User_lastname };
    return result;
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
    this.usersService.remove(id);
  }
}
