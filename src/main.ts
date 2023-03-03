import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mysql_context } from '../infrastructure/mysql.context';

async function bootstrap() {
  mysql_context.initialize().then(async () => { // Initilize orm
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
  });
}
bootstrap();
