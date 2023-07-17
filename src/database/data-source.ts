import * as dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "Abc@1234",
  database: process.env.DB_DATABASE || "bookie",
  logging: ["query"],
  synchronize: false,
  subscribers: [],
  migrations: ["src/database/migrations/*.ts"],
  entities: ["src/entity/*.ts"],
});
