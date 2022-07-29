import { BaseEntity } from 'typeorm';
import { ModelEntity } from "../model/model.entity";
import { NewsEntity } from "../news/news.entity";
export declare class PhotoEntity extends BaseEntity {
    photoID: number;
    name: string;
    modelID: string;
    model: ModelEntity;
    modelPreview: ModelEntity;
    news: NewsEntity;
}
