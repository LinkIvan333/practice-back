import { GroupModel } from './group.model';
import { Repository } from 'typeorm';
export declare class GroupsService {
    private groupRep;
    constructor(groupRep: Repository<GroupModel>);
    getUsers(): Promise<GroupModel[]>;
    addUser(name: string): Promise<GroupModel>;
}
