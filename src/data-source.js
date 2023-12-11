import { DataSource } from "typeorm";
require("dotenv").config();

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.js"],
      }
    : {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PWD,
        database: process.env.POSTGRES_DB,
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.js"],
        migrations: ["src/migrations/*.js"],
      }
);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default AppDataSource;
