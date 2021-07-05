import Umzug from "umzug";
import { pathConstant } from "@config/constants/path.constant";
import { Sequelize } from "sequelize";
import fs from "fs";

export const umzug = () => {
  if (!fs.existsSync(`${pathConstant.userDbPath}`)) {
    console.log(
      'Database directory does not initialized. Please, use "sqlz init" or "sqlz i"'
    );

    process.exit(1);
  }
  if (!fs.existsSync(`${pathConstant.userConfigPath}`)) {
    console.log(
      'Config of database does not initialized. Please, use "sqlz init:config" or "sqlz i:con"'
    );

    process.exit(1);
  }
  if (!fs.existsSync(`${pathConstant.userModelPath}`)) {
    console.log(
      'Models of database does not initialized. Please, use "sqlz init:models" or "sqlz i:mod"'
    );

    process.exit(1);
  }
  if (!fs.existsSync(`${pathConstant.userSeederPath}`)) {
    console.log(
      'Seeders of database does not initialized. Please, use "sqlz init:seeders" or "sqlz i:see"'
    );

    process.exit(1);
  }

  let sequelize;

  const {
    sequelizeConfig,
    operatingMode,
  } = require(`${pathConstant.userConfigPath}/config`);

  if (operatingMode === "development") {
    sequelize = new Sequelize(sequelizeConfig.development);
  } else if (operatingMode === "production") {
    sequelize = new Sequelize(sequelizeConfig.production);
  } else if (operatingMode === "test") {
    sequelize = new Sequelize(sequelizeConfig.test);
  } else {
    console.log(
      '"operatingMod" must be "development" or "production" or "test"'
    );

    process.exit(1);
  }

  return new Umzug({
    migrations: {
      path: `${pathConstant.userMigrationPath}`,
      params: [sequelize.getQueryInterface(), Sequelize],
      pattern: /^\d+[\w-]+\.ts$/,
    },
    storage: "sequelize",
    storageOptions: {
      sequelize,
    },
  });
};
