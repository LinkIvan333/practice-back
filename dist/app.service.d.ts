import { Infomodel } from "./types";
import { Repository } from "typeorm";
import { CategoryEntity } from "./category/category.entity";
export declare class AppService {
    private categoryRep;
    constructor(categoryRep: Repository<CategoryEntity>);
    getInfomodel(): Promise<Infomodel>;
}
