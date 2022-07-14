export type PostResponse = {
    status: number;
    response?: string;
}

export type UserPublicModel = {
    userID: number;
    name: string;
    phoneNumber: string
    points: number;
}

type subCategory = {
    name: string;
}

type category = {
    name: string;
    subCategories: subCategory[];
}

export type Infomodel = {
    categories: category[];
}