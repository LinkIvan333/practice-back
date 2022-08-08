import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ModelEntity} from "../model/model.entity";
import {AdditionEntity} from "./addition.entity";
import {AdditionService} from "./addition.service";
import {AdditionController} from "./addition.controller";
import {ManufacturerEntity} from "../manufacturer/manufacturer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([ModelEntity, AdditionEntity, ManufacturerEntity])],
    exports: [TypeOrmModule, AdditionModule, AdditionService],
    controllers: [AdditionController],
    providers: [AdditionService]
})
export class AdditionModule {}
