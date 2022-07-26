"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ReviewModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const model_entity_1 = require("../model/model.entity");
const user_entity_1 = require("../user/user.entity");
const review_entity_1 = require("./review.entity");
const review_service_1 = require("./review.service");
const review_controller_1 = require("./review.controller");
let ReviewModule = ReviewModule_1 = class ReviewModule {
};
ReviewModule = ReviewModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([model_entity_1.ModelEntity, user_entity_1.UserEntity, review_entity_1.ReviewEntity])],
        exports: [typeorm_1.TypeOrmModule, ReviewModule_1, review_service_1.ReviewService],
        providers: [review_service_1.ReviewService],
        controllers: [review_controller_1.ReviewController]
    })
], ReviewModule);
exports.ReviewModule = ReviewModule;
//# sourceMappingURL=review.module.js.map