import {endOfStringFromManyToOne} from "@components/Common/naming.handler";
import fs from "fs";
import {pathConstant} from "@config/constants/path.constant";

export const createModelFile = (tableName: string, parameters: Array<string>) => {
  const fileName: string = `${endOfStringFromManyToOne(tableName.toLowerCase())}.ts`;
  const modelCode: string =
    "import { DataTypes } from \"sequelize\";\n" +
    "import connection from \"\";\n" +
    `import { I${endOfStringFromManyToOne(tableName)}Model } from \"./interfaces/user.interface\";\n` +
    "\n" +
    `export const ${endOfStringFromManyToOne(tableName)}Model = connection.define<I${endOfStringFromManyToOne(tableName)}Model>(\"${tableName}\", {\n` +
    "  id: {\n" +
    `    type: DataTypes.INTEGER.UNSIGNED,\n` +
    "    autoIncrement: true,\n" +
    "    primaryKey: true,\n" +
    "  },\n" +
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
}