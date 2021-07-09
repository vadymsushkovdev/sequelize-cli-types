import { endOfStringFromManyToOne } from "../../Common/naming.handler";
import fs from "fs";
import { pathConstant } from "../../../config/constants/path.constant";

export const createModelFile = (
  tableName: string,
  parameters: Array<string>
) => {
  const fileName = `${endOfStringFromManyToOne(
    tableName.toLowerCase()
  )}.ts`;
  const modelCode: string =
    'import { DataTypes } from "sequelize";\n' +
    'import connection from ""; //Enter your sequelize connect to database\n' +
    `import { I${endOfStringFromManyToOne(
      tableName
    )}Model } from "./interfaces/${endOfStringFromManyToOne(
      tableName
    ).toLowerCase()}.interface";\n` +
    "\n" +
    `export const ${endOfStringFromManyToOne(
      tableName
    )}Model = connection.define<I${endOfStringFromManyToOne(
      tableName
    )}Model>("${tableName}", {\n` +
    "  id: {\n" +
    `    type: DataTypes.INTEGER.UNSIGNED,\n` +
    "    autoIncrement: true,\n" +
    "    primaryKey: true,\n" +
    "  }," +
    `${parameters}` +
    "\n});";

  fs.writeFile(
    `${pathConstant.userModelPath}/${fileName}`,
    modelCode,
    async (err) => {
      if (err) {
        throw err;
      }
    }
  );
};

export const createModelInterface = (
  tableName: string,
  parameters: Array<string>
) => {
  const fileName = `${endOfStringFromManyToOne(
    tableName.toLowerCase()
  )}.interface.ts`;
  const interfaceCode: string =
    'import { Model } from "sequelize";\n' +
    "\n" +
    `export interface I${endOfStringFromManyToOne(
      tableName
    )}Model extends Model {\n` +
    "  id: number," +
    `${parameters}` +
    "\n}";

  fs.writeFile(
    `${pathConstant.userModelPath}/interfaces/${fileName}`,
    interfaceCode,
    async (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
