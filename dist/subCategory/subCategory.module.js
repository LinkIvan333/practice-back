"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SubCategoryModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const subCategory_service_1 = require("./subCategory.service");
const subCategory_controller_1 = require("./subCategory.controller");
const typeorm_1 = require("@nestjs/typeorm");
const subCategory_entity_1 = require("./subCategory.entity");
const category_entity_1 = require("../category/category.entity");
let SubCategoryModule = SubCategoryModule_1 = class SubCategoryModule {
};
SubCategoryModule = SubCategoryModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([subCategory_entity_1.SubCategoryEntity, category_entity_1.CategoryEntity])],
        exports: [typeorm_1.TypeOrmModule, SubCategoryModule_1, subCategory_service_1.SubCategoryService],
        providers: [subCategory_service_1.SubCategoryService],
        controllers: [subCategory_controller_1.SubCategoryController]
    })
], SubCategoryModule);
exports.SubCategoryModule = SubCategoryModule;
//# sourceMappingURL=subCategory.module.js.map