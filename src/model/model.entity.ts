import {
    BaseEntity,
    Column,
    Entity, JoinColumn,
    JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne,
    PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import {AdditionEntity} from "../addition/addition.entity";
import {PhotoEntity} from "../photo/photo.entity";
import {CategoryEntity} from "../category/category.entity";
import {ModelAdditionEntity} from "../model_addition/model_addition.entity";
import {ManufacturerEntity} from "../manufacturer/manufacturer.entity";

@Entity({ name: 'model' })
export class ModelEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    modelID: number;

    @Column()
    name: string;

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

    @Column({default: true})
    latest: boolean;

    @Column({default: false})
    sell: boolean;

    @Column({nullable: true})
    sellPrice: number;

    @Column({ type: 'date', nullable: true})
    sellStart: string;

    @Column({ type: 'date', nullable: true })
    sellEnd: string;

    @OneToMany(() => ModelAdditionEntity, (modelAddition) => modelAddition.model)
    modelAdditions: ModelAdditionEntity[];

    @OneToMany(() => PhotoEntity, (photo) => photo.model)
    photos: PhotoEntity[];

    // @OneToOne(() => PhotoEntity, (photo) => photo.modelPreview)
    // photo: PhotoEntity;
    @Column()
    previewPhoto: string;

    @ManyToOne(() => ManufacturerEntity, (manufacturer) => manufacturer.models)
    manufacturer: ManufacturerEntity;
}
