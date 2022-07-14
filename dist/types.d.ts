export declare type PostResponse = {
    status: number;
    response?: string;
};
export declare type UserPublicModel = {
    userID: number;
    name: string;
    phoneNumber: string;
    points: number;
};
declare type subCategory = {
    name: string;
};
declare type category = {
    name: string;
    subCategories: subCategory[];
};
export declare type Infomodel = {
    categories: category[];
};
export {};
