import {
    BaseEntity,
    Column,
    Entity, ManyToMany, ManyToOne, OneToMany,
    PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import {ModelEntity} from "../model/model.entity";
import {CategoryEntity} from "../category/category.entity";
import {ModelAdditionEntity} from "../model_addition/model_addition.entity";
import {ManufacturerEntity} from "../manufacturer/manufacturer.entity";

@Entity({name: 'addition'})
export class AdditionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    additionID: number;

    @Column()
    article: string;

    @Column()
    scale: number;

    @Column()
    weight: number;

    @Column()
    dimensions: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @Column({default: false})
    sell: boolean;

    @Column({nullable: true})
    sellPrice: number;

    @Column({type: 'date', nullable: true})
    sellStart: string;

    @Column({type: 'date', nullable: true})
    sellEnd: string;

    @OneToMany(() => ModelAdditionEntity, (modelAddition) => modelAddition.addition)
    modelAdditions: ModelAdditionEntity[];

    @Column()
    previewPhoto: string;

    @ManyToOne(() => ManufacturerEntity, (manufacturer) => manufacturer.additions)
    manufacturer: ManufacturerEntity;

}
