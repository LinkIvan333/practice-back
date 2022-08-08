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
const model_module_1 = require("./model/model.module");
const model_entity_1 = require("./model/model.entity");
const addition_service_1 = require("./addition/addition.service");
const addition_controller_1 = require("./addition/addition.controller");
const addition_module_1 = require("./addition/addition.module");
const addition_entity_1 = require("./addition/addition.entity");
const photo_service_1 = require("./photo/photo.service");
const photo_controller_1 = require("./photo/photo.controller");
const photo_module_1 = require("./photo/photo.module");
const photo_entity_1 = require("./photo/photo.entity");
const model_addition_service_1 = require("./model_addition/model_addition.service");
const model_addition_module_1 = require("./model_addition/model_addition.module");
const model_addition_entity_1 = require("./model_addition/model_addition.entity");
const news_controller_1 = require("./news/news.controller");
const news_module_1 = require("./news/news.module");
const news_entity_1 = require("./news/news.entity");
const search_module_1 = require("./search/search.module");
const manufacturer_service_1 = require("./manufacturer/manufacturer.service");
const manufacturer_controller_1 = require("./manufacturer/manufacturer.controller");
const manufacturer_module_1 = require("./manufacturer/manufacturer.module");
const manufacturer_entity_1 = require("./manufacturer/manufacturer.entity");
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
                entities: [user_entity_1.UserEntity, category_entity_1.CategoryEntity, subCategory_entity_1.SubCategoryEntity, model_entity_1.ModelEntity, addition_entity_1.AdditionEntity, photo_entity_1.PhotoEntity, model_addition_entity_1.ModelAdditionEntity, news_entity_1.NewsEntity, manufacturer_entity_1.ManufacturerEntity],
                migrations: ['src/database/migrations/*.ts'],
            }),
            nestjs_1.AdminModule.createAdmin({
                adminJsOptions: {
                    rootPath: '/admin',
                    resources: [user_entity_1.UserEntity, category_entity_1.CategoryEntity, subCategory_entity_1.SubCategoryEntity, model_entity_1.ModelEntity, addition_entity_1.AdditionEntity, photo_entity_1.PhotoEntity, model_addition_entity_1.ModelAdditionEntity, news_entity_1.NewsEntity, manufacturer_entity_1.ManufacturerEntity],
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
            model_module_1.ModelModule,
            addition_module_1.AdditionModule,
            photo_module_1.PhotoModule,
            model_addition_module_1.ModelAdditionModule,
            news_module_1.NewsModule,
            search_module_1.SearchModule,
            manufacturer_module_1.ManufacturerModule,
        ],
        controllers: [app_controller_1.AppController, addition_controller_1.AdditionController, photo_controller_1.PhotoController, news_controller_1.NewsController, manufacturer_controller_1.ManufacturerController],
        providers: [app_service_1.AppService, addition_service_1.AdditionService, photo_service_1.PhotoService, model_addition_service_1.ModelAdditionService, manufacturer_service_1.ManufacturerService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map