import {
    BaseEntity,
    Column,
    Entity, JoinColumn,
    JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn,
    PrimaryGeneratedColumn, RelationId,
} from 'typeorm';
import {ModelEntity} from "../model/model.entity";
import {AdditionEntity} from "../addition/addition.entity";


@Entity({ name: 'model_addition' })
export class ModelAdditionEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    modelAdditionID: number;

    @Column({name: 'model_id'})
    modelID: number;

    @Column({name: 'addition_id'})
    additionID: number;

    @ManyToOne(() => ModelEntity, (model) => model.modelAdditions)
    @JoinColumn({name: 'model_id'})
    model: ModelEntity;

    @ManyToOne(() => AdditionEntity, (addition) => addition.modelAdditions)
    @JoinColumn({name: 'addition_id'})
    addition: AdditionEntity;

}
