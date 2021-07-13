import Umzug from "umzug";
import { pathConstant } from "../constants/path.constant";
import { Sequelize } from "sequelize";
import { checkNecessaryPath } from "./check.necessary.path";
import { sequelizeConnection } from "./sequelize.connection";

export const umzug = async (usagePath: string): Promise<Umzug.Umzug> => {
  checkNecessaryPath();

  const { sequelizeConfig, operatingMode } = await import(
    `${pathConstant.userConfigPath}/config`
  );

  const sequelize = await sequelizeConnection(operatingMode, sequelizeConfig);

  return new Umzug({
    migrations: {
      path: usagePath,
      params: [sequelize.getQueryInterface(), Sequelize],
      pattern: /^\d+[\w-]+\.ts$/,
    },
    storage: "sequelize",
    storageOptions: {
      sequelize,
    },
  });
};
