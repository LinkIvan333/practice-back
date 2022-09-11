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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
let SearchService = class SearchService {
    constructor(elasticsearchService) {
        this.elasticsearchService = elasticsearchService;
        this.indexModels = 'models';
        this.indexAdditions = 'additions';
        this.indexTools = 'tools';
    }
    async indexModel(item) {
        let name = item.name.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '');
        return this.elasticsearchService.index({
            index: this.indexModels,
            body: {
                id: item.modelID,
                name: name,
                article: item.article,
                previewPhoto: item.previewPhoto,
                price: item.price,
                manufacturer: item.manufacturer,
                scale: item.scale,
                inStock: item.inStock,
                sell: item.sell,
                sellPrice: item.sellPrice,
                latest: item.latest,
            }
        });
    }
    async indexAddition(item) {
        let name = item.name.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '');
        return this.elasticsearchService.index({
            index: this.indexAdditions,
            body: {
                id: item.additionID,
                name: name,
                article: item.article,
                previewPhoto: item.previewPhoto,
                price: item.price,
                manufacturer: item.manufacturer,
                scale: item.scale,
                inStock: item.inStock,
                sell: item.sell,
                sellPrice: item.sellPrice
            }
        });
    }
    async search(query) {
        var _a;
        let query_name = (_a = query.value) === null || _a === void 0 ? void 0 : _a.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '').replace(/(\s)(\d)/g, '$2');
        const filters = [];
        const sort = [];
        if (query.manufacturer) {
            filters.push({
                term: {
                    manufacturer: query.manufacturer
                },
            });
        }
        if (query.inStock) {
            filters.push({
                term: {
                    inStock: query.inStock
                },
            });
        }
        if (query.latest) {
            filters.push({
                term: {
                    latest: query.latest
                },
            });
        }
        if (query.scale) {
            filters.push({
                term: {
                    scale: query.scale
                },
            });
        }
        if (query.price) {
            if (query.price === 'asc') {
                sort.push({
                    price: 'asc'
                });
            }
            else {
                sort.push({
                    price: 'desc'
                });
            }
        }
        const response = await this.elasticsearchService.search({
            index: [this.indexModels, this.indexAdditions],
            body: {
                query: {
                    bool: {
                        should: [
                            {
                                query_string: {
                                    default_field: "name",
                                    query: `*${query_name}*`,
                                    fuzziness: 'AUTO'
                                }
                            },
                            {
                                match: {
                                    article: {
                                        query: query.value,
                                    },
                                },
                            }
                        ],
                        filter: filters
                    }
                },
                sort: sort
            }
        });
        return response.hits.hits;
    }
    async removeModel(modelID) {
        await this.elasticsearchService.deleteByQuery({
            index: this.indexModels,
            body: {
                query: {
                    match: {
                        id: modelID,
                    }
                }
            }
        });
    }
    async removeAddition(additionID) {
        await this.elasticsearchService.deleteByQuery({
            index: this.indexAdditions,
            body: {
                query: {
                    match: {
                        id: additionID,
                    }
                }
            }
        });
    }
    async modifyModel(body) {
        const script = Object.entries(body).reduce((result, [key, value]) => {
            return `${result} ctx._source.${key}='${value}';`;
        }, '');
        return await this.elasticsearchService.updateByQuery({
            index: this.indexModels,
            body: {
                query: {
                    match: {
                        id: body.modelID,
                    }
                },
                script: script
            }
        });
    }
    async modifyAddition(body) {
        const script = Object.entries(body).reduce((result, [key, value]) => {
            return `${result} ctx._source.${key}='${value}';`;
        }, '');
        return await this.elasticsearchService.updateByQuery({
            index: this.indexModels,
            body: {
                query: {
                    match: {
                        id: body.additionID,
                    }
                },
                script: script
            }
        });
    }
};
SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map