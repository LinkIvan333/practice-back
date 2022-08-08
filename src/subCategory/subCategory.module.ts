import { Module } from '@nestjs/common';
import { SubCategoryService } from './subCategory.service';
import { SubCategoryController } from './subCategory.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import { SubCategoryEntity } from "./subCategory.entity";
import {CategoryEntity} from "../category/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryEntity, CategoryEntity])],
  exports: [TypeOrmModule, SubCategoryModule, SubCategoryService],
  providers: [SubCategoryService],
  controllers: [SubCategoryController]
})
export class SubCategoryModule {}
