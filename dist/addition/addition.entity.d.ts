import { BaseEntity } from 'typeorm';
import { ModelAdditionEntity } from "../model_addition/model_addition.entity";
export declare class AdditionEntity extends BaseEntity {
    additionID: number;
    article: string;
    scale: string;
    weight: number;
    dimensions: string;
    price: number;
    description: string;
    sell: boolean;
    sellPrice: number;
    sellStart: string;
    sellEnd: string;
    modelAdditions: ModelAdditionEntity[];
}
