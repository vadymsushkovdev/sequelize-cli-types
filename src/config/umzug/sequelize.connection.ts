import { Sequelize } from "sequelize";
import {ISequelizeConnection, Mode} from "./interfaces/connection.interface";

export const sequelizeConnection = (
  operatingMode: Mode,
  sequelizeConfig: ISequelizeConnection
) => {
  switch (operatingMode) {
    case "development":
      return new Sequelize(sequelizeConfig.development);
    case "production":
      return new Sequelize(sequelizeConfig.production);
    case "test":
      return new Sequelize(sequelizeConfig.test);
  };

  console.log(
    '"operatingMode" must be "development" or "production" or "test"'
  );

  process.exit(9);
};
