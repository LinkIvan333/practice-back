import {Controller, Get, Param, ParseIntPipe, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {ModelService} from "./model.service";
import {getModel, getModelsList} from "../types";

@Controller('model')
export class ModelController {
    constructor(private readonly modelsService: ModelService) {}

    @Get('/')
    async getModelsList(@Query() query: getModelsList) {
        return this.modelsService.getModelsList(query.page, query.perPage)
    }

    @Get('/:id')
    async getModel(@Param() params:getModel) {
        return this.modelsService.getModel(params.id)
    }
}
