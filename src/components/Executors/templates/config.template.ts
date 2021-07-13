import fs from "fs";
import { pathConstant } from "../../../config/constants/path.constant";

export const createConfigFile = async () => {
  const configCode: string =
    'import { ISequelizeConfig, Mode } from "ts-sequelize-cli";\n' +
    `\n` +
    `export const sequelizeConfig: ISequelizeConfig =` +
    ` {\n` +
    `  development: {\n` +
    `    username: "postgres",\n` +
    `    password: "postgres",\n` +
    `    database: "db_development",\n` +
    `    host: "localhost",\n` +
    `    dialect: "postgres",\n` +
    `  },\n` +
    `  test: {\n` +
    `    username: "postgres",\n` +
    `    password: "postgres",\n` +
    `    database: "db_test",\n` +
    `    host: "localhost",\n` +
    `    dialect: "postgres",\n` +
    `  },\n` +
    `  production: {\n` +
    `    username: "postgres",\n` +
    `    password: "postgres",\n` +
    `    database: "db_production",\n` +
    `    host: "localhost",\n` +
    `    dialect: "postgres",\n` +
    `  },\n` +
    `};\n` +
    `\n` +
    `export const operatingMode: Mode = "development";`;

  await fs.writeFile(
    `${pathConstant.userConfigPath}/config.ts`,
    configCode,
    async (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
