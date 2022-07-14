import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {UserPublicModel} from "../types";

@Controller()
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user/:id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<UserPublicModel> {
    return this.usersService.getUser(id);
  }

  @Post('user')
  async registerUser(
    @Body()
    user: {
      mail: string;
      password: string;
    },
  ) {
    return await this.usersService.registerUser(user.mail, user.password);
  }

  @UseGuards(JwtAuthGuard)
  @Put('user/:id')
  async editUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    user: {
      name?: string;
      number?: string;
      groupID?: number;
    },
  ) {
    return await this.usersService.editUser(
      id,
      user.name,
      user.number,
    );
  }
}
