import {
    BaseEntity,
    Column,
    Entity, JoinColumn,
    ManyToOne, OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {ModelEntity} from "../model/model.entity";
import {NewsEntity} from "../news/news.entity";

@Entity({ name: 'photo' })
export class PhotoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    photoID: number;

    @Column()
    name: string;

    @Column({name: 'model_id'})
    modelID: string;

    @ManyToOne(() => ModelEntity, (model) => model.photos)
    @JoinColumn({name: 'model_id'})
    model: ModelEntity;

    @OneToOne(() => ModelEntity, (model) => model.photo)
    modelPreview: ModelEntity;

    @OneToOne(() => NewsEntity, (news) => news.photo)
    news: NewsEntity;
}
