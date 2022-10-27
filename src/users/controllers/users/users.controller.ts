import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { CreateUserPostDto } from '../../dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from '../../dtos/CreateUserProfile.dto';
import { UpdateUserDto } from '../../dtos/UpdateUser.dto';
import { plainToClass } from 'class-transformer';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/utils/types/types';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async getUsers() {
    const users = await this.userService.findUsers();
    return users.map((user) => plainToClass(SerializedUser, user));
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  @Post(':id/profiles')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.userService.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  createUserPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto,
  ) {
    return this.userService.createUserPost(id, createUserPostDto);
  }
}
