import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import dotenv = require('dotenv');
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

const { parsed } = dotenv.config({
  path: process.cwd() + '/.env' + (process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''),
});


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const option = new DocumentBuilder()
  .setTitle(process.env.APP_NAME)
  .setDescription('MJ Rest API Docs')
  .setVersion(process.env.APP_VERSION)
  .build();
  
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('swagger', app, document)
  app.enableCors();
  
  await app.listen(process.env.APP_PORT);
  console.log('backend on port : '+process.env.APP_PORT)
}
bootstrap();
