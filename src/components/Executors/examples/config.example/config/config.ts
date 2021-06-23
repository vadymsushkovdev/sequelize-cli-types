import { ISequelizeConfig } from "./interfaces/interface.config";

export const sequelizeConfig: ISequelizeConfig = {
  development: {
    username: "user",
    password: null,
    database: "db_development",
    host: "host", //if you use a docker, it should be changed to the container name
    dialect: "postgres",
  },
  test: {
    username: "user",
    password: null,
    database: "db_test",
    host: "host", //if you use a docker, it should be changed to the container name
    dialect: "postgres",
  },
  production: {
    username: "user",
    password: null,
    database: "db_production",
    host: "host", //if you use a docker, it should be changed to the container name
    dialect: "postgres",
  },
};
