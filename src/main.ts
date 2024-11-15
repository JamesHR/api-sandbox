import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validators
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remueve propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no permitidas
      transform: true, // Transforma los datos de entrada al tipo especificado en el DTO
      errorHttpStatusCode: 400, // Envía código 400 en caso de error
    }),
  );


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
