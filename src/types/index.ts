export interface ISequelizeConfig {
  development: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
  };
  test: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
  };
  production: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
  };
}

type Dialect = "postgres" | "mysql";

export type Mode = "development" | "production" | "test";
