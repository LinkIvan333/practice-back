import { BaseEntity } from 'typeorm';
import { CategoryEntity } from "../category/category.entity";
export declare class SubCategoryEntity extends BaseEntity {
    subCategoryID: number;
    name: string;
    category: CategoryEntity;
    constructor(name: string, id?: number);
}
