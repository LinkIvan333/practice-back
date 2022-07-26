import { BaseEntity } from 'typeorm';
import { ModelEntity } from "../model/model.entity";
import { UserEntity } from "../user/user.entity";
export declare class ReviewEntity extends BaseEntity {
    reviewID: number;
    rating: number;
    comment: string;
    reviewDate: string;
    model: ModelEntity;
    user: UserEntity;
}
