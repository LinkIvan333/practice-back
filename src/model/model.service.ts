import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ModelEntity} from "./model.entity";

@Injectable()
export class ModelService {
    constructor(
        @InjectRepository(ModelEntity)
        private modelsRep: Repository<ModelEntity>,
    ) {}

    async getModelsList(page?: number, perPage?: number) {
        if (perPage) {
            const skip = (perPage * page) - perPage;
            return await this.modelsRep.find({take: perPage, skip})
        }
        return await this.modelsRep.find()
    }

    async getModel(id: number) {
        return await this.modelsRep.find({where: {modelID: id}})
    }
}
