"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AdditionModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_entity_1 = require("../model/model.entity");
const addition_entity_1 = require("./addition.entity");
const addition_service_1 = require("./addition.service");
const addition_controller_1 = require("./addition.controller");
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
let AdditionModule = AdditionModule_1 = class AdditionModule {
};
AdditionModule = AdditionModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([model_entity_1.ModelEntity, addition_entity_1.AdditionEntity, manufacturer_entity_1.ManufacturerEntity])],
        exports: [typeorm_1.TypeOrmModule, AdditionModule_1, addition_service_1.AdditionService],
        controllers: [addition_controller_1.AdditionController],
        providers: [addition_service_1.AdditionService]
    })
], AdditionModule);
exports.AdditionModule = AdditionModule;
//# sourceMappingURL=addition.module.js.map