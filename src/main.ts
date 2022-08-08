import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";
import {NestExpressApplication} from "@nestjs/platform-express";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Models')
      .setDescription('Models online shop')
      .setVersion('1.0')
      .addTag('models')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: true,
    transform: true,
  }));
  app.enableCors()
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static/'
  })
  await app.listen(3000);
}
bootstrap();
