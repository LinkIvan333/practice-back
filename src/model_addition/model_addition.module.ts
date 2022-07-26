import { Module } from '@nestjs/common';
import { ModelAdditionController } from './model_addition.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ModelAdditionService} from "./model_addition.service";
import {ModelAdditionEntity} from "./model_addition.entity";
import {ModelEntity} from "../model/model.entity";
import {AdditionEntity} from "../addition/addition.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ModelAdditionEntity, ModelEntity, AdditionEntity])],
  exports: [TypeOrmModule, ModelAdditionModule, ModelAdditionService],
  providers: [ModelAdditionService],
  controllers: [ModelAdditionController],
})
export class ModelAdditionModule {}
