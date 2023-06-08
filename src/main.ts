import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger/OpenAPI documentation
  const config = new DocumentBuilder()
    .setTitle('Geothermik Kata API')
    .setDescription('The Geothermik API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  // Pipes for validation. https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors({ origin: 'http://localhost:4200', methods: '*' });

  await app.listen(3000); 
}
bootstrap();
