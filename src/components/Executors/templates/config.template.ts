import fs from "fs";
import { pathConstant } from "../../../config/constants/path.constant";
import { endOfStringFromManyToOne } from "../../Common/naming.handler";

export const createConfigFile = async () => {
  const configCode: string =
    'import { ISequelizeConfig, Mode } from "./interfaces/interface.config"\n' +
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

export const createConfigInterface = async () => {
  const interfaceCode: string =
    "/*\n" +
    "-----------------------------------------------------------------------------------\n" +
    "Do not change types of config, because in this case sequelize may not work properly\n" +
    "-----------------------------------------------------------------------------------\n" +
    " */\n" +
    "\n" +
    "export interface ISequelizeConfig {\n" +
    "  development: {\n" +
    "    username: string;\n" +
    "    password: string;\n" +
    "    database: string;\n" +
    "    host: string;\n" +
    "    dialect: Dialect;\n" +
    "  };\n" +
    "  test: {\n" +
    "    username: string;\n" +
    "    password: string;\n" +
    "    database: string;\n" +
    "    host: string;\n" +
    "    dialect: Dialect;\n" +
    "  };\n" +
    "  production: {\n" +
    "    username: string;\n" +
    "    password: string;\n" +
    "    database: string;\n" +
    "    host: string;\n" +
    "    dialect: Dialect;\n" +
    "  };\n" +
    "}\n" +
    "\n" +
    'type Dialect = "postgres" | "mysql";\n' +
    "\n" +
    'export type Mode = "development" | "production" | "test";\n';

  await fs.writeFile(
    `${pathConstant.userConfigPath}/interfaces/interface.config.ts`,
    interfaceCode,
    async (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
