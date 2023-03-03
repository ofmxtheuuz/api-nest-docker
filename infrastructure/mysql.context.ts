import { DataSource } from "typeorm";
import { Movie } from "./models/movie";

export const mysql_context = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "mxtz2023",
  database: "api_nestjs",
  synchronize: true,
  logging: false,
  entities: [Movie],
  subscribers: [],
  migrations: [],
})