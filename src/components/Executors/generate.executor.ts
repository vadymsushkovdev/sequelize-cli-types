import { createMigrationFile } from "@components/Executors/examples/templates/migrations.template";
import { logAction } from "@config/logs/log.action";
import { initializationMessages } from "@config/constants/logs.messages";
import {
  endOfStringFromManyToOne,
  migrationColumnBuilder,
  modelColumnBuilder,
  modelInterfaceColumnBuilder,
} from "@components/Common/naming.handler";
import {
  createModelFile,
  createModelInterface,
} from "@components/Executors/examples/templates/models.template";

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
}

export const generateExecutor = new GenerateExecutor();
