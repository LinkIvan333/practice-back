import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ManufacturerController} from "./manufacturer.controller";
import {ManufacturerService} from "./manufacturer.service";
import {AdditionEntity} from "../addition/addition.entity";
import {ModelEntity} from "../model/model.entity";
import {ManufacturerEntity} from "./manufacturer.entity";

@Module({
    imports: [TypeOrmModule.forFeature([AdditionEntity, ModelEntity, ManufacturerEntity])],
    exports: [TypeOrmModule, ManufacturerModule, ManufacturerService],
    controllers: [ManufacturerController],
    providers: [ManufacturerService]
})
export class ManufacturerModule {}
