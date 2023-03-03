import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MovieService } from './services/movies.service';
import { CreateMovie } from './http/dao/create-movie.dao';

@Controller()
export class AppController {
  private readonly _s: MovieService
  constructor(s: MovieService) {
    this._s = s;
  }


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
