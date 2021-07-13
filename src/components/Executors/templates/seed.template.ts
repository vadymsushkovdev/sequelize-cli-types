import fs from "fs";
import { pathConstant } from "../../../config/constants/path.constant";
import {
  dateOfCreatingFile,
  endOfStringFromManyToOne,
} from "../../Common/naming.handler";

export const createSeedFile = (
  tableName: string,
) => {
  const fileName = `${dateOfCreatingFile()}-${endOfStringFromManyToOne(
    tableName.toLowerCase()
  )}.ts`;
  const seedCode: string =
    'import { QueryInterface } from "sequelize";\n' +
    "\n" +
    "export default {\n" +
    "  up: (queryInterface: QueryInterface) =>\n" +
    `    queryInterface.bulkInsert(\n` +
    `      "${tableName}",\n` +
    `      [\n` +
    `        {\n` +
    `\n` +
    "        },\n" +
    "      ],\n" +
    "      {}\n" +
    "    ),\n" +
    `\n` +
    "  down: (queryInterface: QueryInterface) =>\n" +
    `    queryInterface.bulkDelete("${tableName}", {\n` +
    "\n" +
    "    }),\n" +
    "};\n";

  fs.writeFile(
    `${pathConstant.userSeederPath}/${fileName}`,
    seedCode,
    async (err) => {
      if (err) {
        throw err;
      }
    }
  );
};
