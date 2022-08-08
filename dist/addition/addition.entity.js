"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdditionEntity = void 0;
const typeorm_1 = require("typeorm");
const model_addition_entity_1 = require("../model_addition/model_addition.entity");
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
let AdditionEntity = class AdditionEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdditionEntity.prototype, "additionID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdditionEntity.prototype, "article", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AdditionEntity.prototype, "scale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AdditionEntity.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdditionEntity.prototype, "dimensions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], AdditionEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdditionEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], AdditionEntity.prototype, "sell", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AdditionEntity.prototype, "sellPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], AdditionEntity.prototype, "sellStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], AdditionEntity.prototype, "sellEnd", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => model_addition_entity_1.ModelAdditionEntity, (modelAddition) => modelAddition.addition),
    __metadata("design:type", Array)
], AdditionEntity.prototype, "modelAdditions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdditionEntity.prototype, "previewPhoto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => manufacturer_entity_1.ManufacturerEntity, (manufacturer) => manufacturer.additions),
    __metadata("design:type", manufacturer_entity_1.ManufacturerEntity)
], AdditionEntity.prototype, "manufacturer", void 0);
AdditionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'addition' })
], AdditionEntity);
exports.AdditionEntity = AdditionEntity;
//# sourceMappingURL=addition.entity.js.map