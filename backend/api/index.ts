import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';

const server = express();
let isReady = false;

// Middleware para asegurar headers CORS en cualquier petición, incluido OPTIONS
server.use((req: Request, res: Response, next) => {
  const allowedOrigins = [
    'https://www.metalurgicasoltermann.com.ar',
    'https://metalurgicasoltermann.com.ar',
    'http://localhost:5173',
  ];
  const origin = req.headers.origin as string;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }

  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Accept',
  );

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  next();
});

async function bootstrapServer() {
  if (!isReady) {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
    app.enableCors({
      origin: true,
      credentials: true,
    });
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
    );
    await app.init();
    isReady = true;
  }
  return server;
}

export default async function handler(req: any, res: any) {
  await bootstrapServer();
  return server(req, res);
}