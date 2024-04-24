import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_DATABASE_HOST || "localhost",
  port: parseInt(process.env.MYSQL_DATABASE_PORT || "4306"),
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [User],
  synchronize: true, // seria false a producció
});

//funció per inicializar la DataSource
export async function initializeDataSource() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");
  } catch (err) {
    console.error("Error during Data Source initialization:", err);
  }
}
