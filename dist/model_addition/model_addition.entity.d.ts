import { BaseEntity } from 'typeorm';
import { ModelEntity } from "../model/model.entity";
import { AdditionEntity } from "../addition/addition.entity";
export declare class ModelAdditionEntity extends BaseEntity {
    modelAdditionID: number;
    modelID: number;
    additionID: number;
    model: ModelEntity;
    addition: AdditionEntity;
}
