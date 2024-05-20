import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { HttpExceptionFilter } from './http-exception.filter';
import 'reflect-metadata';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(morgan('dev'));
  app.use(cookieParser());
  // Enable CORS
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Replace with your React app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.enableCors(corsOptions);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3030);
}

bootstrap();
