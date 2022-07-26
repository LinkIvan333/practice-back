import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './user/user.module';
import {UserEntity} from './user/user.entity';
import {AuthModule} from './auth/auth.module';
import {JwtModule} from '@nestjs/jwt';
import {jwtConstants} from './constants';
import {AdminModule} from '@adminjs/nestjs';
import {Database, Resource} from '@adminjs/typeorm'
import {CategoryModule} from './category/category.module';
import AdminJS from 'adminjs';
import {CategoryEntity} from "./category/category.entity";
import {SubCategoryModule} from './subCategory/subCategory.module';
import {SubCategoryEntity} from "./subCategory/subCategory.entity";
import {ModelModule} from './model/model.module';
import {ModelEntity} from "./model/model.entity";
import {AdditionService} from './addition/addition.service';
import {AdditionController} from './addition/addition.controller';
import {AdditionModule} from './addition/addition.module';
import {AdditionEntity} from "./addition/addition.entity";
import {createConnection} from "typeorm";
import {PhotoService} from './photo/photo.service';
import {PhotoController} from './photo/photo.controller';
import {PhotoModule} from './photo/photo.module';
import {PhotoEntity} from "./photo/photo.entity";
import {ModelAdditionService} from './model_addition/model_addition.service';
import {ModelAdditionModule} from './model_addition/model_addition.module';
import {ModelAdditionEntity} from "./model_addition/model_addition.entity";
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';
import {NewsEntity} from "./news/news.entity";

AdminJS.registerAdapter({Database, Resource})


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            // url: process.env.DATABASE_URL,
            host: '0.0.0.0',
            port: 5432,
            username: 'test',
            password: 'test',
            database: 'test',
            logging: true,
            synchronize: true,
            entities: [UserEntity, CategoryEntity, SubCategoryEntity, ModelEntity, AdditionEntity, PhotoEntity, ModelAdditionEntity, NewsEntity],
            migrations: ['src/database/migrations/*.ts'],
        }),
        AdminModule.createAdmin({
            adminJsOptions: {
                rootPath: '/admin',
                resources: [UserEntity, CategoryEntity, SubCategoryEntity, ModelEntity, AdditionEntity, PhotoEntity, ModelAdditionEntity, NewsEntity],
            },
            auth: {
                authenticate: async (email, password) => Promise.resolve({email: 'test'}),
                cookieName: 'test',
                cookiePassword: 'testPass',
            },
        }),
        AuthModule,
        UserModule,
        CategoryModule,
        SubCategoryModule,
        ModelModule,
        AdditionModule,
        PhotoModule,
        ModelAdditionModule,
        NewsModule,
    ],
    controllers: [AppController, AdditionController, PhotoController, NewsController],
    providers: [AppService, AdditionService, PhotoService, ModelAdditionService],
})
export class AppModule {
}

// host: '0.0.0.0',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgrespw',
//   database: 'test',
