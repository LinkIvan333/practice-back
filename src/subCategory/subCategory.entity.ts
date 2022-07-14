import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn, ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {CategoryEntity} from "../category/category.entity";

@Entity({ name: 'subCategory' })
export class SubCategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    subCategoryID: number;

    @Column()
    name: string;

    @ManyToOne(() => CategoryEntity, (category) => category.subCategories)
    category: CategoryEntity;

    constructor(name: string, id?: number) {
        super();
        this.subCategoryID = id;
        this.name = name;
    }
}
