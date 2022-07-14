import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AdminModule } from '@adminjs/nestjs';
import { Database, Resource } from '@adminjs/typeorm'
import { CategoryModule } from './category/category.module';
import AdminJS from 'adminjs';
import {CategoryEntity} from "./category/category.entity";
import { SubCategoryModule } from './subCategory/subCategory.module';
import {SubCategoryEntity} from "./subCategory/subCategory.entity";

AdminJS.registerAdapter({ Database, Resource })


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
      entities: [UserEntity, CategoryEntity, SubCategoryEntity],
      migrations: ['src/database/migrations/*.ts'],
    }),
    AdminModule.createAdmin({
      adminJsOptions: {
        rootPath: '/admin',
        resources: [UserEntity, CategoryEntity, SubCategoryEntity],
      },
      auth: {
        authenticate: async (email, password) => Promise.resolve({ email: 'test' }),
        cookieName: 'test',
        cookiePassword: 'testPass',
      },
    }),
    AuthModule,
    UserModule,
    CategoryModule,
    SubCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// host: '0.0.0.0',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgrespw',
//   database: 'test',
