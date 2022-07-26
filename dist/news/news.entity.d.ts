import { BaseEntity } from 'typeorm';
import { PhotoEntity } from "../photo/photo.entity";
export declare class NewsEntity extends BaseEntity {
    newsID: number;
    text: string;
    date: string;
    photo: PhotoEntity;
}
