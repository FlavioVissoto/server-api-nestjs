import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestValidationPipe } from './pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new RequestValidationPipe());
  await app.listen(3000);
}
bootstrap();
