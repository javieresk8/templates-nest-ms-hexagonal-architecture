import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Set global prefix for all routes
  const prefix = configService.get<string>('PREFIX');
  app.setGlobalPrefix(prefix!)

  // Use global validation pipe
  // This will automatically validate incoming requests based on the DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  )

  // Set Swager documentation
  const swaggerDoc = new DocumentBuilder()
    .setTitle('Digital Signature Microservice API')
    .setDescription('API for Digital Signature')
    .setVersion('1.0')
    .addTag('Digital Signature Evicertia')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerDoc);
  SwaggerModule.setup(
    `${configService.get<number>('PREFIX')}/docs`, 
    app, 
    document, {
    swaggerOptions: {
      persistAuthorization: false,
    },
  });

  // Enable CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  });

  await app.listen(configService.get<number>('PORT') ?? 3000);
}
bootstrap();
