import fs from "fs";
import { pathConstant } from "@config/constants/path.constant";
import {
  dateOfCreatingFile,
  endOfStringFromManyToOne,
} from "@components/Common/naming.handler";

export const createMigrationFile = (
  tableName: string,
  parameters: Array<string>
) => {
  const fileName: string = `${dateOfCreatingFile()}-create-${endOfStringFromManyToOne(
    tableName.toLowerCase()
  )}.ts`;
  const migrationCode: string =
    'import Sequelize, { QueryInterface } from "sequelize";\n' +
    "\n" +
    "export default {\n" +
    "  up: async (queryInterface: QueryInterface): Promise<void> => {\n" +
    `    await queryInterface.createTable("${tableName}", {\n` +
    "      id: {\n" +
    "        allowNull: false,\n" +
    "        autoIncrement: true,\n" +
    "        primaryKey: true,\n" +
    "        type: Sequelize.INTEGER,\n" +
    "      }," +
    `${parameters}` +
    "\n    });\n" +
    "  },\n" +
    "  down: async (queryInterface: QueryInterface): Promise<void> => {\n" +
    `    await queryInterface.dropTable("${tableName}");\n` +
    "  },\n" +
    "};\n";

  fs.writeFile(
    `${pathConstant.userMigrationPath}/${fileName}`,
    migrationCode,
    async (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
