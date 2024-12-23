import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // Validators
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no permitidas
      transform: true, // Transforma los datos de entrada al tipo especificado en el DTO
      errorHttpStatusCode: 400, // Envía código 400 en caso de error
    }),
  );

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('API Sandbox')
    .setDescription('Documentación de la API Sandbox para desarrollo de proyectos')
    .setVersion('1.0')
    .addServer('https://api-sandbox-f3ei.onrender.com')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidocs', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
