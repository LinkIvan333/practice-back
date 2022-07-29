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
exports.ModelEntity = void 0;
const typeorm_1 = require("typeorm");
const photo_entity_1 = require("../photo/photo.entity");
const model_addition_entity_1 = require("../model_addition/model_addition.entity");
let ModelEntity = class ModelEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ModelEntity.prototype, "modelID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModelEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModelEntity.prototype, "article", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModelEntity.prototype, "scale", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ModelEntity.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModelEntity.prototype, "dimensions", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ModelEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModelEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ModelEntity.prototype, "sell", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ModelEntity.prototype, "sellPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], ModelEntity.prototype, "sellStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], ModelEntity.prototype, "sellEnd", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => model_addition_entity_1.ModelAdditionEntity, (modelAddition) => modelAddition.model),
    __metadata("design:type", Array)
], ModelEntity.prototype, "modelAdditions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => photo_entity_1.PhotoEntity, (photo) => photo.model),
    __metadata("design:type", Array)
], ModelEntity.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => photo_entity_1.PhotoEntity, (photo) => photo.modelPreview),
    __metadata("design:type", photo_entity_1.PhotoEntity)
], ModelEntity.prototype, "photo", void 0);
ModelEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'model' })
], ModelEntity);
exports.ModelEntity = ModelEntity;
//# sourceMappingURL=model.entity.js.map