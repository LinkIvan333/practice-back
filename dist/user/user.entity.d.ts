import { BaseEntity } from 'typeorm';
export declare class UserEntity extends BaseEntity {
    userID: number;
    name: string;
    mail: string;
    password: string;
    salt: string;
    phoneNumber: string;
    points: number;
    constructor(mail: string, password: string, salt: string, id?: number);
}
