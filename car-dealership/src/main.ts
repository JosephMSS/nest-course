import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove all properties if not exist in the dto definition
      forbidNonWhitelisted: true, //throw error if req has not valid properties
    }),
  );
  await app.listen(3000);
}
bootstrap();
