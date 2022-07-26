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
exports.NewsEntity = void 0;
const typeorm_1 = require("typeorm");
const photo_entity_1 = require("../photo/photo.entity");
let NewsEntity = class NewsEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NewsEntity.prototype, "newsID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NewsEntity.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], NewsEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => photo_entity_1.PhotoEntity, (photo) => photo.model),
    __metadata("design:type", photo_entity_1.PhotoEntity)
], NewsEntity.prototype, "photo", void 0);
NewsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'news' })
], NewsEntity);
exports.NewsEntity = NewsEntity;
//# sourceMappingURL=news.entity.js.map