import {IsBoolean, IsNumber, IsNumberString, IsOptional, IsString, isValidationOptions} from "class-validator";
import {Column, OneToMany, OneToOne} from "typeorm";
import {ModelAdditionEntity} from "./model_addition/model_addition.entity";
import {PhotoEntity} from "./photo/photo.entity";
import {ManufacturerEntity} from "./manufacturer/manufacturer.entity";

export type PostResponse = {
    status: number;
    response?: string;
}

export type Manufacturer = {
    manufacturerID: number;
    name: string;
    banned: boolean;
}

export type Model = {
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
}

export type Addition = {
    additionID: number;
    name: string;
    article: string;
    scale: number;
    // weight: number;
    // dimensions: string;
    price: number;
    manufacturer: number,
    inStock: boolean,
    // description: string;
    sell: boolean;
    sellPrice: number;
    // sellStart: string;
    // sellEnd: string;
    // modelAdditions: ModelAdditionEntity[];
    previewPhoto: string;
}

export type UserPublicModel = {
    userID: number;
    name: string;
    phoneNumber: string
    points: number;
}

type SubCategory = {
    name: string;
}

type Category = {
    name: string;
    subCategories: SubCategory[];
}

export type Infomodel = {
    categories: Category[];
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

export class getSearchResults{
    @IsString()
    @IsOptional()
    value: number;

    @IsNumberString()
    @IsOptional()
    manufacturer: number;

    @IsBoolean()
    @IsOptional()
    inStock: boolean;

    @IsNumberString()
    @IsOptional()
    scale: number;

    @IsString()
    @IsOptional()
    price: number;
}