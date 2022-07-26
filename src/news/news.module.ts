import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import {NewsController} from "./news.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PhotoEntity} from "../photo/photo.entity";
import {NewsEntity} from "./news.entity";

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity, PhotoEntity])],
  exports: [TypeOrmModule, NewsModule, NewsService],
  providers: [NewsService],
  controllers: [NewsController]
})
export class NewsModule {}
