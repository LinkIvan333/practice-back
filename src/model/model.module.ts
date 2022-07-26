import { Module } from '@nestjs/common';
import { ModelController } from './model.controller';
import { ModelService } from './model.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ModelEntity} from "./model.entity";
import {AdditionEntity} from "../addition/addition.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ModelEntity, AdditionEntity])],
  exports: [TypeOrmModule, ModelModule, ModelService],
  controllers: [ModelController],
  providers: [ModelService]
})
export class ModelModule {}
