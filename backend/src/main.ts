import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();

export const createServer = async () => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.init();
  return server;
};

if (process.env.NODE_ENV !== 'production') {
  createServer().then(() => {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.log(`Backend corriendo en http://localhost:${port}`);
    });
  });
}

export default async (req: any, res: any) => {
  await createServer();
  return server(req, res);
};