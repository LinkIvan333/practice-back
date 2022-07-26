"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AbcModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbcModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const abc_service_1 = require("./abc.service");
const abc_controller_1 = require("./abc.controller");
const abc_entity_1 = require("./abc.entity");
let AbcModule = AbcModule_1 = class AbcModule {
};
AbcModule = AbcModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([abc_entity_1.AbcEntity])],
        exports: [typeorm_1.TypeOrmModule, AbcModule_1, abc_service_1.AbcService],
        controllers: [abc_controller_1.AbcController],
        providers: [abc_service_1.AbcService]
    })
], AbcModule);
exports.AbcModule = AbcModule;
//# sourceMappingURL=abc.module.js.map