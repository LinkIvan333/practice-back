import { Repository } from "typeorm";
import { ModelEntity } from "./model.entity";
export declare class ModelService {
    private modelsRep;
    constructor(modelsRep: Repository<ModelEntity>);
    getModelsList(page?: number, perPage?: number): Promise<ModelEntity[]>;
    getModel(id: number): Promise<ModelEntity[]>;
}
