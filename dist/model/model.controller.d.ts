import { ModelService } from "./model.service";
import { getModel, getModelsList } from "../types";
export declare class ModelController {
    private readonly modelsService;
    constructor(modelsService: ModelService);
    getModelsList(query: getModelsList): Promise<import("./model.entity").ModelEntity[]>;
    getModel(params: getModel): Promise<import("./model.entity").ModelEntity[]>;
}
