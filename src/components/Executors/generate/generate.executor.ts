import { createMigrationFile } from "@components/Executors/examples/templates/migrations.template";
import { logAction } from "@config/logs/log.action";
import { initializationMessages } from "@config/constants/logs.messages";
import {
  columnBuilder,
  endOfStringFromManyToOne,
} from "@components/Common/naming.handler";

class GenerateExecutor {
  public async generateMigration(tableName: string, parameters: Array<string>) {
    try {
      const separatedParameters = parameters.map((arr) => {
        return arr.split(":");
      });
      const columnData = separatedParameters.map((column) => {
        return columnBuilder(column[0], column[1]) ?? "";
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

  public async generateModel(params: any, model: any) {
    try {
      console.log(
        params.map((arr: string) => {
          return arr.split(":");
        }),
        model
      );
    } catch (err) {
      console.error(err);
    }
  }

  public async generateSeed() {
    try {
    } catch (err) {
      console.error(err);
    }
  }
}

export const generateExecutor = new GenerateExecutor();
