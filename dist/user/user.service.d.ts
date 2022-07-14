import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { PostResponse, UserPublicModel } from "../types";
export declare class UserService {
    private usersRep;
    constructor(usersRep: Repository<UserEntity>);
    getUser(id: number): Promise<UserPublicModel>;
    registerUser(mail: string, password: string): Promise<PostResponse>;
    getUserByMail(mail: string): Promise<UserEntity>;
    editUser(id: number, name?: string, phoneNumber?: string, password?: string): Promise<PostResponse>;
}
