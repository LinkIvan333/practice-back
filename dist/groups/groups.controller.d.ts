import { GroupsService } from './groups.service';
import { GroupModel } from './group.model';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    getUsers(): Promise<GroupModel[]>;
    addUser(user: {
        name: string;
    }): Promise<GroupModel>;
}
