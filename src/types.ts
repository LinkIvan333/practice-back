import {IsNumber, IsNumberString, IsOptional, isValidationOptions} from "class-validator";

export type PostResponse = {
    status: number;
    response?: string;
}

export type Review = {
    reviewID: number;
    rating: number;
    comment: string;
    reviewDate: string;
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

export class getModelsList {
    @IsOptional()
    @IsNumberString()
    page: number;

    @IsOptional()
    @IsNumberString()
    perPage: number;
}

export class getModel{
    @IsNumberString()
    id: number;
}