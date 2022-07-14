"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/user.entity");
const auth_module_1 = require("./auth/auth.module");
const nestjs_1 = require("@adminjs/nestjs");
const typeorm_2 = require("@adminjs/typeorm");
const category_module_1 = require("./category/category.module");
const adminjs_1 = require("adminjs");
const category_entity_1 = require("./category/category.entity");
const subCategory_module_1 = require("./subCategory/subCategory.module");
const subCategory_entity_1 = require("./subCategory/subCategory.entity");
adminjs_1.default.registerAdapter({ Database: typeorm_2.Database, Resource: typeorm_2.Resource });
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '0.0.0.0',
                port: 5432,
                username: 'test',
                password: 'test',
                database: 'test',
                logging: true,
                synchronize: true,
                entities: [user_entity_1.UserEntity, category_entity_1.CategoryEntity, subCategory_entity_1.SubCategoryEntity],
                migrations: ['src/database/migrations/*.ts'],
            }),
            nestjs_1.AdminModule.createAdmin({
                adminJsOptions: {
                    rootPath: '/admin',
                    resources: [user_entity_1.UserEntity, category_entity_1.CategoryEntity, subCategory_entity_1.SubCategoryEntity],
                },
                auth: {
                    authenticate: async (email, password) => Promise.resolve({ email: 'test' }),
                    cookieName: 'test',
                    cookiePassword: 'testPass',
                },
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            subCategory_module_1.SubCategoryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map