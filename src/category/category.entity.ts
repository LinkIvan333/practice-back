import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn, OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { SubCategoryEntity } from "../subCategory/subCategory.entity";

@Entity({ name: 'category' })
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    categoryID: number;

    @Column()
    name: string;

    @OneToMany(() => SubCategoryEntity, (subCategory) => subCategory.category)
    subCategories: SubCategoryEntity[];

    constructor(name: string, id?: number) {
        super();
        this.categoryID = id;
        this.name = name;
    }
}
