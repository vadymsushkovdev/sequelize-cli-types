import { createMigrationFile } from "@components/Executors/examples/templates/migrations.template";
import { logAction } from "@config/logs/log.action";
import { initializationMessages } from "@config/constants/logs.messages";
import {endOfStringFromManyToOne} from "@components/Common/naming.handler";

class GenerateExecutor {
  public async generateMigration(tableName: string) {
    try {
      await createMigrationFile(tableName);
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
      console.log(params.map((arr: string) => {
        return arr.split(":")
      }), model);
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
