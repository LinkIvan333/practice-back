import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Query,
    Req, UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {SearchService} from "./search.service";
import {Addition, deleteModel, getSearchResults, Model} from "../types";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";


@Controller('elastic')
export class SearchController {
    constructor(private readonly searchService: SearchService) {}

    @UseGuards(JwtAuthGuard)
    @Post('addModel')
    async addModel(@Body() model: Model) {
        return this.searchService.indexModel(model)
    }

    @Delete('removeModel')
    async removeModel(@Query() query: deleteModel) {
        return this.searchService.removeModel(query.modelID)
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
