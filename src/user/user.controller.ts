import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParamDto } from './dto/param.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param() data: ParamDto) {
    return this.userService.findOne(data);
  }

  @Patch(':id')
  update(@Param() userId: ParamDto, @Body() data: UpdateUserDto) {
    return this.userService.update(userId, data);
  }

  @Delete(':id')
  remove(@Param() userId: ParamDto) {
    return this.userService.remove(userId);
  }
}
