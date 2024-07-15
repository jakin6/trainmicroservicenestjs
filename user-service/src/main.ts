import { NestFactory } from '@nestjs/core';
import { UsersModule } from './usersmodule/usersModule.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule);
  await app.listen();
}
bootstrap();
