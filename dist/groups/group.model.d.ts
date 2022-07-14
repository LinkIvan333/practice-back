import { BaseEntity } from 'typeorm';
export declare class GroupModel extends BaseEntity {
    id: number;
    name: string;
    constructor(name: string, id?: number);
}
