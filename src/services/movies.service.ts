import { Movie } from "infrastructure/models/movie";
import { Repository } from "typeorm";
import { mysql_context } from "infrastructure/mysql.context";

export class movies_services {
  constructor(private readonly _r: Repository<Movie>) { this._r = mysql_context.getRepository(Movie) }

  async findMany() {
    const movies: Movie[] = await this._r.find()
    return { status: 200, movies: movies.map(( uuid, ...rest ) => rest)}
  }
  
  async findOne(id: number) {
    const movie: Movie = await this._r.findOne({ where: {id}})
    const { uuid, ...rest } = movie
    return rest
  }

}