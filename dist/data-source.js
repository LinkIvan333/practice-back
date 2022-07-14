"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: '0.0.0.0',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test',
    synchronize: true,
    logging: false,
    entities: ['dist/entities/*.js'],
    migrations: ['dist/migrations/*.js'],
});
//# sourceMappingURL=data-source.js.map