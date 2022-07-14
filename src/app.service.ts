import {Injectable} from '@nestjs/common';
import {Infomodel} from "./types";
import {InjectRepository} from "@nestjs/typeorm";
import {UserEntity} from "./user/user.entity";
import {Repository} from "typeorm";
import {CategoryEntity} from "./category/category.entity";

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRep: Repository<CategoryEntity>,
    ) {
    }

    async getInfomodel(): Promise<Infomodel> {
        const categories = await this.categoryRep.find({
            relations: {
                subCategories: true,
            },
        })
        return {
            categories: categories
        }
    }
}
