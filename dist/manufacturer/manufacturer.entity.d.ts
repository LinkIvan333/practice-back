import { BaseEntity } from 'typeorm';
import { ModelEntity } from "../model/model.entity";
import { AdditionEntity } from "../addition/addition.entity";
export declare class ManufacturerEntity extends BaseEntity {
    manufacturerID: number;
    name: string;
    banned: boolean;
    models: ModelEntity[];
    additions: AdditionEntity[];
}
