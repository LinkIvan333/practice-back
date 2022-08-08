import { BaseEntity } from 'typeorm';
import { ModelAdditionEntity } from "../model_addition/model_addition.entity";
import { ManufacturerEntity } from "../manufacturer/manufacturer.entity";
export declare class AdditionEntity extends BaseEntity {
    additionID: number;
    article: string;
    scale: number;
    weight: number;
    dimensions: string;
    price: number;
    description: string;
    sell: boolean;
    sellPrice: number;
    sellStart: string;
    sellEnd: string;
    modelAdditions: ModelAdditionEntity[];
    previewPhoto: string;
    manufacturer: ManufacturerEntity;
}
