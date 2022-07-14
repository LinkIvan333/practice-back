import { UserService } from './user.service';
import { UserPublicModel } from "../types";
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    getUser(id: number): Promise<UserPublicModel>;
    registerUser(user: {
        mail: string;
        password: string;
    }): Promise<import("../types").PostResponse>;
    editUser(id: number, user: {
        name?: string;
        number?: string;
        groupID?: number;
    }): Promise<import("../types").PostResponse>;
}
