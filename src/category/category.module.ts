import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CategoryEntity} from "./category.entity";
import {SubCategoryEntity} from "../subCategory/subCategory.entity";

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, SubCategoryEntity])],
  exports: [TypeOrmModule, CategoryModule, CategoryService],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
