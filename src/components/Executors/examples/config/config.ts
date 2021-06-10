import { ISequelizeConfig } from './interfaces/interface.config';

export const sequelizeConfig: ISequelizeConfig = {
  development: {
    username: 'user',
    password: null,
    database: 'db_development',
    host: 'host',
    dialect: 'postgres',
  },
  test: {
    username: 'user',
    password: null,
    database: 'db_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'user',
    password: null,
    database: 'db_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
