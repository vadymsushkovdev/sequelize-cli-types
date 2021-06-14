/*
-------------------------------------------------------------------------
Do not change types, because in this case sequelize may not work properly
-------------------------------------------------------------------------
 */

export interface ISequelizeConfig {
  development: {
    username: string;
    password: string | null;
    database: string;
    host: string;
    dialect: Dialect;
  };
  test: {
    username: string;
    password: string | null;
    database: string;
    host: string;
    dialect: Dialect;
  };
  production: {
    username: string;
    password: string | null;
    database: string;
    host: string;
    dialect: Dialect;
  };
}

type Dialect = 'postgres' | 'mysql';
