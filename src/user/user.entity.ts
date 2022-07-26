import {
  BaseEntity,
  Column,
  Entity, OneToMany, OneToOne,
  PrimaryGeneratedColumn, Unique,
} from 'typeorm';

@Unique(['mail'])
@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column()
  points: number;

  constructor(mail: string, password: string, salt: string, id?: number) {
    super();
    this.userID = id;
    this.name = null;
    this.phoneNumber = null;
    this.points = 0;
    this.mail = mail;
    this.password = password;
    this.salt = salt;
  }
}
