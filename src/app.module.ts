import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { movies_services } from './services/movies.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [movies_services],
})
export class AppModule {}
