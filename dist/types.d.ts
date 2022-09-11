export declare type PostResponse = {
    status: number;
    response?: string;
};
export declare type Manufacturer = {
    manufacturerID: number;
    name: string;
    banned: boolean;
};
export declare type Model = {
    modelID: number;
    name: string;
    article: string;
    scale: number;
    inStock: boolean;
    price: number;
    sell: boolean;
    sellPrice: number;
    previewPhoto: string;
    manufacturer: number;
    latest: boolean;
};
export declare type Addition = {
    additionID: number;
    name: string;
    article: string;
    scale: number;
    price: number;
    manufacturer: number;
    inStock: boolean;
    sell: boolean;
    sellPrice: number;
    previewPhoto: string;
};
export declare type UserPublicModel = {
    userID: number;
    name: string;
    phoneNumber: string;
    points: number;
};
declare type SubCategory = {
    name: string;
};
declare type Category = {
    name: string;
    subCategories: SubCategory[];
};
export declare type Infomodel = {
    categories: Category[];
};
export declare class getModelsList {
    page: number;
    perPage: number;
}
export declare class getModel {
    id: number;
}
export declare class getSearchResults {
    value: number;
    manufacturer: number;
    inStock: boolean;
    scale: number;
    price: number;
    latest: number;
}
export declare class deleteModel {
    modelID: number;
}
export {};
