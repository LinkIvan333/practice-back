"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Models')
        .setDescription('Models online shop')
        .setVersion('1.0')
        .addTag('models')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        skipMissingProperties: true,
        transform: true,
    }));
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'static'), {
        prefix: '/static/'
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map