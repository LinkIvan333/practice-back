import { BaseEntity } from 'typeorm';
import { PhotoEntity } from "../photo/photo.entity";
import { ModelAdditionEntity } from "../model_addition/model_addition.entity";
export declare class ModelEntity extends BaseEntity {
    modelID: number;
    name: string;
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
    photos: PhotoEntity[];
    photo: PhotoEntity;
}
