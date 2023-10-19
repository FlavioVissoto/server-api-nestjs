import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestValidationPipe } from './pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new RequestValidationPipe());
  app.enableCors();
  await app.listen(process.env.PORT || 9000);
}
bootstrap();
