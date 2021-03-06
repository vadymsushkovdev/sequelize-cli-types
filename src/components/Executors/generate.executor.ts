import { createMigrationFile } from "./templates/migrations.template";
import { logAction } from "../../config/logs/log.action";
import { initializationMessages } from "../../config/constants/logs.messages";
import { endOfStringFromManyToOne } from "../Common/naming.handler";
import {
  createModelFile,
  createModelInterface,
} from "./templates/models.template";
import {
  migrationColumnBuilder,
  modelColumnBuilder,
  modelInterfaceColumnBuilder,
} from "../Common/columnBuilder";
import { createSeedFile } from "./templates/seed.template";

class GenerateExecutor {
  public async generateMigration(tableName: string, parameters: Array<string>) {
    try {
      const separatedParameters = parameters.map((arr) => {
        return arr.split(":");
      });
      const columnData = separatedParameters.map((column) => {
        return migrationColumnBuilder(column[0], column[1]) || "";
      });

      createMigrationFile(tableName, columnData);

      console.log(
        `The migration file ${endOfStringFromManyToOne(
          tableName.toLowerCase()
        )} has been created. Status: Pending`
      );

      await logAction(
        initializationMessages.successMessages.migrationGeneration +
          ` File: ${endOfStringFromManyToOne(tableName.toLowerCase())}`
      );
    } catch (err) {
      console.error(err);

      await logAction(
        initializationMessages.errorMessages.migrationGeneration +
          ` File: ${endOfStringFromManyToOne(tableName.toLowerCase())}` +
          " Message: " +
          err.message
      );
    }
  }

  public async generateModel(modelName: string, parameters: Array<string>) {
    try {
      const separatedParameters = parameters.map((arr) => {
        return arr.split(":");
      });
      const columnData = separatedParameters.map((column) => {
        return modelColumnBuilder(column[0], column[1]) ?? "";
      });
      const interfaceData = separatedParameters.map((column) => {
        return modelInterfaceColumnBuilder(column[0], column[1]) ?? "";
      });

      createModelInterface(modelName, interfaceData);
      createModelFile(modelName, columnData);

      console.log(
        `The model file ${endOfStringFromManyToOne(
          modelName.toLowerCase()
        )} has been created.`
      );
    } catch (err) {
      console.error(err);
    }
  }

  public async generateSeed(tableName: string) {
    try {
      createSeedFile(tableName);

      console.log(
        `The seed file ${endOfStringFromManyToOne(
          tableName.toLowerCase()
        )} is created. Status: Pending`
      );

      await logAction(
        initializationMessages.successMessages.migrationGeneration +
          ` File: ${endOfStringFromManyToOne(tableName.toLowerCase())}`
      );
    } catch (err) {
      console.error(err);

      await logAction(
        initializationMessages.errorMessages.migrationGeneration +
          ` File: ${endOfStringFromManyToOne(tableName.toLowerCase())}` +
          " Message: " +
          err.message
      );
    }
  }
}

export const generateExecutor = new GenerateExecutor();
