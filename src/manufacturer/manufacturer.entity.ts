import {
    BaseEntity,
    Column,
    Entity, OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {ModelEntity} from "../model/model.entity";
import {AdditionEntity} from "../addition/addition.entity";

@Entity({name: 'manufacturer'})
export class ManufacturerEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    manufacturerID: number;

    @Column()
    name: string;

    @Column()
    banned: boolean;

    @OneToMany(() => ModelEntity, (model) => model.manufacturer)
    models: ModelEntity[];

    @OneToMany(() => AdditionEntity, (addition) => addition.manufacturer)
    additions: AdditionEntity[];
}
