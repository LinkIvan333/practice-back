import { BaseEntity } from 'typeorm';
import { SubCategoryEntity } from "../subCategory/subCategory.entity";
export declare class CategoryEntity extends BaseEntity {
    categoryID: number;
    name: string;
    subCategories: SubCategoryEntity[];
    constructor(name: string, id?: number);
}
