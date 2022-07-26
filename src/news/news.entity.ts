import {
    BaseEntity,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {PhotoEntity} from "../photo/photo.entity";

@Entity({ name: 'news' })
export class NewsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    newsID: number;

    @Column()
    text: string;

    @Column({ type: 'date', nullable: true})
    date: string;

    @OneToOne(() => PhotoEntity, (photo) => photo.model)
    photo: PhotoEntity;

}
