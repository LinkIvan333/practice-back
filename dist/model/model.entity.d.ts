import { BaseEntity } from 'typeorm';
import { PhotoEntity } from "../photo/photo.entity";
import { ModelAdditionEntity } from "../model_addition/model_addition.entity";
import { ManufacturerEntity } from "../manufacturer/manufacturer.entity";
export declare class ModelEntity extends BaseEntity {
    modelID: number;
    name: string;
    article: string;
    scale: number;
    weight: number;
    dimensions: string;
    price: number;
    description: string;
    latest: boolean;
    sell: boolean;
    sellPrice: number;
    sellStart: string;
    sellEnd: string;
    modelAdditions: ModelAdditionEntity[];
    photos: PhotoEntity[];
    previewPhoto: string;
    manufacturer: ManufacturerEntity;
}
