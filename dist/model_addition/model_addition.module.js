"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ModelAdditionModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelAdditionModule = void 0;
const common_1 = require("@nestjs/common");
const model_addition_controller_1 = require("./model_addition.controller");
const typeorm_1 = require("@nestjs/typeorm");
const model_addition_service_1 = require("./model_addition.service");
const model_addition_entity_1 = require("./model_addition.entity");
const model_entity_1 = require("../model/model.entity");
const addition_entity_1 = require("../addition/addition.entity");
let ModelAdditionModule = ModelAdditionModule_1 = class ModelAdditionModule {
};
ModelAdditionModule = ModelAdditionModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([model_addition_entity_1.ModelAdditionEntity, model_entity_1.ModelEntity, addition_entity_1.AdditionEntity])],
        exports: [typeorm_1.TypeOrmModule, ModelAdditionModule_1, model_addition_service_1.ModelAdditionService],
        providers: [model_addition_service_1.ModelAdditionService],
        controllers: [model_addition_controller_1.ModelAdditionController],
    })
], ModelAdditionModule);
exports.ModelAdditionModule = ModelAdditionModule;
//# sourceMappingURL=model_addition.module.js.map