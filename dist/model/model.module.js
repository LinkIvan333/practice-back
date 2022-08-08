"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ModelModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelModule = void 0;
const common_1 = require("@nestjs/common");
const model_controller_1 = require("./model.controller");
const model_service_1 = require("./model.service");
const typeorm_1 = require("@nestjs/typeorm");
const model_entity_1 = require("./model.entity");
const addition_entity_1 = require("../addition/addition.entity");
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
const photo_entity_1 = require("../photo/photo.entity");
let ModelModule = ModelModule_1 = class ModelModule {
};
ModelModule = ModelModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([model_entity_1.ModelEntity, addition_entity_1.AdditionEntity, manufacturer_entity_1.ManufacturerEntity, photo_entity_1.PhotoEntity])],
        exports: [typeorm_1.TypeOrmModule, ModelModule_1, model_service_1.ModelService],
        controllers: [model_controller_1.ModelController],
        providers: [model_service_1.ModelService]
    })
], ModelModule);
exports.ModelModule = ModelModule;
//# sourceMappingURL=model.module.js.map