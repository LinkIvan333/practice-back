import { SearchService } from "./search.service";
import { Addition, deleteModel, getSearchResults, Model } from "../types";
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    addModel(model: Model): Promise<import("@elastic/elasticsearch/lib/api/types").WriteResponseBase>;
    removeModel(query: deleteModel): Promise<void>;
    modifyModel(model: Model): Promise<import("@elastic/elasticsearch/lib/api/types").WriteResponseBase>;
    addAddition(addition: Addition): Promise<import("@elastic/elasticsearch/lib/api/types").WriteResponseBase>;
    searchModel(query: getSearchResults): Promise<import("@elastic/elasticsearch/lib/api/types").SearchHit<unknown>[]>;
}
