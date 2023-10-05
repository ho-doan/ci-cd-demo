import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  console.log(process.env.NODE_ENV);
  console.log(__dirname);
  const app = await NestFactory.create(AppModule);
  //#region Open API
  const config = new DocumentBuilder()
    .setTitle('Nhat AN')
    .setDescription('The nhat an API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  //#endregion
  // app.useLogger(app.get(LoggerService));
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
