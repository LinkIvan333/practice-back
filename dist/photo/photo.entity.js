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
exports.PhotoEntity = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = require("../model/model.entity");
const news_entity_1 = require("../news/news.entity");
let PhotoEntity = class PhotoEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PhotoEntity.prototype, "photoID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PhotoEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'model_id' }),
    __metadata("design:type", String)
], PhotoEntity.prototype, "modelID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => model_entity_1.ModelEntity, (model) => model.photos),
    (0, typeorm_1.JoinColumn)({ name: 'model_id' }),
    __metadata("design:type", model_entity_1.ModelEntity)
], PhotoEntity.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => news_entity_1.NewsEntity, (news) => news.photo),
    __metadata("design:type", news_entity_1.NewsEntity)
], PhotoEntity.prototype, "news", void 0);
PhotoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'photo' })
], PhotoEntity);
exports.PhotoEntity = PhotoEntity;
//# sourceMappingURL=photo.entity.js.map