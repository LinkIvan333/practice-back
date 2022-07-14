import {Controller, Request, Post, UseGuards, Body, Get, Param, ParseIntPipe} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {Infomodel, UserPublicModel} from "./types";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() req) {
    return this.authService.loginWithCredentials(req);
  }

  @Get('infomodel')
  async getInfomodel() {
    return this.appService.getInfomodel();
  }
}
