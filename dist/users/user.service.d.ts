import { UserModel } from './user.model';
import { Repository } from 'typeorm';
import { PostResponse, UserPublicModel } from "../types";
export declare class UsersService {
    private usersRep;
    constructor(usersRep: Repository<UserModel>);
    getUser(id: number): Promise<UserPublicModel>;
    addUser(mail: string, password: string): Promise<PostResponse>;
    getUserByMail(mail: string): Promise<UserModel>;
    editUser(id: number, name?: string, phoneNumber?: string, password?: string): Promise<PostResponse>;
}
