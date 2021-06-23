import Umzug from "umzug";
import { pathConstant } from "@config/constants/path.constant";
import {Sequelize} from "sequelize";
import {sequelizeConfig} from "../../../../db/config/config";

const sequelize = new Sequelize(sequelizeConfig.development)

const umzug = new Umzug({
  migrations: {
    path: `${pathConstant.userMigrationPath}`,
    params: [
      sequelize.getQueryInterface(),
      Sequelize
    ],
    pattern: /^\d+[\w-]+\.ts$/,
  },
  storage: "sequelize",
  storageOptions: {
    sequelize: sequelize,
  },
});

export const up = async () => {
  await umzug.up();
  console.log("All migrations performed successfully");
};

export const down = async () => {
  await umzug.down();
  console.log("All migrations performed successfully");
};
