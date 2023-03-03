import { Movie } from "infrastructure/models/movie";
import { Repository } from "typeorm";
import { mysql_context } from "infrastructure/mysql.context";
import { CreateMovie } from "src/http/dao/create-movie.dao";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MovieService {
  private readonly _r: Repository<Movie> = mysql_context.getRepository(Movie)

  async findMany(): Promise<Object> {
    let movies: Movie[] = await this._r.find()
    const moviesn = movies.map(( {uuid, ...rest} ) => rest )
    return { status: 200, movies: moviesn }
  }
  async findOne(id: number): Promise<Object> {
    const movie: Movie = await this._r.findOne({ where: {id}})
    const { uuid, ...rest } = movie
    return { status: 200, movie: rest}
  }
  async create(dao: CreateMovie): Promise<Object> {
    const movie: Movie = new Movie()
    movie.category = dao.category
    movie.description = dao.description
    movie.name = dao.name
    movie.release_year = dao.release_year
    movie.views = dao.views

    return {status: 201, movie: await this._r.save(movie)}
  }

}