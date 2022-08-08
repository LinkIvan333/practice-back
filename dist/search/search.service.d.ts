import { ElasticsearchService } from "@nestjs/elasticsearch";
import { Addition, Model } from "../types";
export declare class SearchService {
    private readonly elasticsearchService;
    indexModels: string;
    indexAdditions: string;
    indexTools: string;
    constructor(elasticsearchService: ElasticsearchService);
    indexModel(item: Model): Promise<import("@elastic/elasticsearch/lib/api/types").WriteResponseBase>;
    indexAddition(item: Addition): Promise<import("@elastic/elasticsearch/lib/api/types").WriteResponseBase>;
    search(query: any): Promise<import("@elastic/elasticsearch/lib/api/types").SearchHit<unknown>[]>;
    removeModel(modelID: number): Promise<void>;
    removeAddition(additionID: number): Promise<void>;
    modifyModel(body: Model): Promise<import("@elastic/elasticsearch/lib/api/types").UpdateByQueryResponse>;
    modifyAddition(body: Addition): Promise<import("@elastic/elasticsearch/lib/api/types").UpdateByQueryResponse>;
}
