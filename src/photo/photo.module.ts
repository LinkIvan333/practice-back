import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ModelEntity} from "../model/model.entity";
import {PhotoEntity} from "./photo.entity";
import {PhotoService} from "./photo.service";
import {PhotoController} from "./photo.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ModelEntity, PhotoEntity])],
    exports: [TypeOrmModule, PhotoModule, PhotoService],
    controllers: [PhotoController],
    providers: [PhotoService]
})
export class PhotoModule {}
