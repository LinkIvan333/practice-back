import {Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {SearchService} from "./search.service";
import {Addition, getSearchResults, Model} from "../types";


@Controller('elastic')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @Post('addModel')
    async addModel(@Body() model: Model) {
        return this.searchService.indexModel(model)
    }

    @Post('modifyModel')
    async modifyModel(@Body() model: Model) {
        return this.searchService.indexModel(model)
    }

    @Post('addAddition')
    async addAddition(@Body() addition: Addition) {
        return this.searchService.indexAddition(addition)
    }

    @Get('search')
    async searchModel(@Query() query: getSearchResults) {
        return this.searchService.search(query)
    }
}
