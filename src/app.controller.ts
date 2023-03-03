import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { movies_services } from './services/movies.service';
import { CreateMovie } from './http/dao/create-movie.dao';

@Controller()
export class AppController {
  constructor(private readonly _s: movies_services) {}


  @Get()
  async Home() {
    return await this._s.findMany();
  }
  @Get(":id")
  async Movie(@Param("id") id: number) {
    return await this._s.findOne(id);
  }
  @Post()
  async Create(@Body() dao: CreateMovie) {
    return await this._s.create(dao);
  }


}
