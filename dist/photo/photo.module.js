"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PhotoModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_entity_1 = require("../model/model.entity");
const photo_entity_1 = require("./photo.entity");
const photo_service_1 = require("./photo.service");
const photo_controller_1 = require("./photo.controller");
let PhotoModule = PhotoModule_1 = class PhotoModule {
};
PhotoModule = PhotoModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([model_entity_1.ModelEntity, photo_entity_1.PhotoEntity])],
        exports: [typeorm_1.TypeOrmModule, PhotoModule_1, photo_service_1.PhotoService],
        controllers: [photo_controller_1.PhotoController],
        providers: [photo_service_1.PhotoService]
    })
], PhotoModule);
exports.PhotoModule = PhotoModule;
//# sourceMappingURL=photo.module.js.map