"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ManufacturerModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const manufacturer_controller_1 = require("./manufacturer.controller");
const manufacturer_service_1 = require("./manufacturer.service");
const addition_entity_1 = require("../addition/addition.entity");
const model_entity_1 = require("../model/model.entity");
const manufacturer_entity_1 = require("./manufacturer.entity");
let ManufacturerModule = ManufacturerModule_1 = class ManufacturerModule {
};
ManufacturerModule = ManufacturerModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([addition_entity_1.AdditionEntity, model_entity_1.ModelEntity, manufacturer_entity_1.ManufacturerEntity])],
        exports: [typeorm_1.TypeOrmModule, ManufacturerModule_1, manufacturer_service_1.ManufacturerService],
        controllers: [manufacturer_controller_1.ManufacturerController],
        providers: [manufacturer_service_1.ManufacturerService]
    })
], ManufacturerModule);
exports.ManufacturerModule = ManufacturerModule;
//# sourceMappingURL=manufacturer.module.js.map