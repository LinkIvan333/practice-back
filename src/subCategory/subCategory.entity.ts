import {
    BaseEntity,
    Column,
    Entity, JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import {CategoryEntity} from "../category/category.entity";

@Entity({ name: 'subCategory' })
export class SubCategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    subCategoryID: number;

    @Column()
    name: string;

    @Column({name: 'category_id'})
    categoryID: number;

    @ManyToOne(() => CategoryEntity, (category) => category.subCategories)
    @JoinColumn({name: 'category_id'})
    category: CategoryEntity;

    constructor(name: string, id?: number) {
        super();
        this.subCategoryID = id;
        this.name = name;
    }
}
