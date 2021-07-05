import { ISequelizeConfig, Mode } from "./interfaces/interface.config";

export const sequelizeConfig: ISequelizeConfig = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "db_development",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "db_test",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    username: "postgres",
    password: "postgres",
    database: "db_production",
    host: "localhost",
    dialect: "postgres",
  },
};

export const operatingMode: Mode = "development";
