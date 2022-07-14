import { UsersService } from './users.service';
import { UserPublicModel } from "../types";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(id: number): Promise<UserPublicModel>;
    registerUser(user: {
        login: string;
        password: string;
    }): Promise<import("../types").PostResponse>;
    editUser(id: number, user: {
        name?: string;
        number?: string;
        groupID?: number;
    }): Promise<import("../types").PostResponse>;
}
