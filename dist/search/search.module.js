"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SearchModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const search_service_1 = require("./search.service");
const search_controller_1 = require("./search.controller");
let SearchModule = SearchModule_1 = class SearchModule {
};
SearchModule = SearchModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            elasticsearch_1.ElasticsearchModule.registerAsync({
                useFactory: async () => ({
                    node: 'http://localhost:9200',
                    auth: {
                        username: 'elactic',
                        password: 'changeme',
                    }
                }),
            }),
        ],
        exports: [elasticsearch_1.ElasticsearchModule, SearchModule_1, search_service_1.SearchService],
        providers: [search_service_1.SearchService],
        controllers: [search_controller_1.SearchController]
    })
], SearchModule);
exports.SearchModule = SearchModule;
//# sourceMappingURL=search.module.js.map