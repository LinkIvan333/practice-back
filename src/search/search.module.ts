import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import {SearchService} from "./search.service";
import {SearchController} from "./search.controller";

@Module({
    imports: [
        ElasticsearchModule.registerAsync({
            useFactory: async () => ({
                node: 'http://localhost:9200',
                auth: {
                    username: 'elactic',
                    password: 'changeme',
                }
            }),
        }),
    ],
    exports: [ElasticsearchModule, SearchModule, SearchService],
    providers: [SearchService],
    controllers: [SearchController]
})
export class SearchModule {}