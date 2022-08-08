import {Injectable} from '@nestjs/common';
import {ElasticsearchService} from "@nestjs/elasticsearch";
import {Addition, Model} from "../types";

@Injectable()
export class SearchService {
    indexModels = 'models'
    indexAdditions = 'additions'
    indexTools = 'tools'

    constructor(
        private readonly elasticsearchService: ElasticsearchService
    ) {
    }

    async indexModel(item: Model) {
        let name  = item.name.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g,'');
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
                sellPrice: item.sellPrice
            }
        })
    }


    async indexAddition(item: Addition) {
        let name  = item.name.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g,'');
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
        })
    }

    // async indexTool(item: Model) {
    //     return this.elasticsearchService.index({
    //         index: this.index,
    //         body: {
    //             id: item.modelID,
    //             type: 'tool',
    //             name: item.name,
    //         }
    //     })
    // }

    async search(query) {
        let query_name = query.value?.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g,'').replace(/(\s)(\d)/g,'$2')
        const filters = []
        const sort = []
        if (query.manufacturer) {
            filters.push({
                term: {
                    manufacturer: query.manufacturer
                },
            })
        }

        if (query.inStock) {
            filters.push({
                term: {
                    inStock: query.inStock
                },
            })
        }

        if (query.scale) {
            filters.push({
                term: {
                    scale: query.scale
                },
            })
        }

        if (query.price) {
            if (query.price === 'asc') {
                sort.push({
                    price: 'asc'
                })
            } else {
                sort.push({
                    price: 'desc'
                })
            }
        }

        const response = await this.elasticsearchService.search({
            index: [this.indexModels, this.indexAdditions],
            body: {
                query: {
                    bool: {
                        should: [
                            {
                                query_string : {
                                    default_field : "name",
                                    query : `*${query_name}*`,
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
                    // prefix: {
                    //     name: {
                    //         value: name,
                    //     },
                    // }
                    // match: {
                    //     name: {
                    //         query: name,
                    //         operator: 'or',
                    //         fuzziness: 'auto',
                    //     },
                    // }
                    // query_string : {default_field : name, query : `*${name}*`}
                },
                sort: sort
            }
        })

        return response.hits.hits
    }

    async removeModel(modelID: number) {
        await this.elasticsearchService.deleteByQuery({
            index: this.indexModels,
            body: {
                query: {
                    match: {
                        id: modelID,
                    }
                }
            }
        })
    }

    async removeAddition(additionID: number) {
        await this.elasticsearchService.deleteByQuery({
            index: this.indexAdditions,
            body: {
                query: {
                    match: {
                        id: additionID,
                    }
                }
            }
        })
    }

    async modifyModel(body: Model) {
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
        })
    }

    async modifyAddition(body: Addition) {
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
        })
    }

}
