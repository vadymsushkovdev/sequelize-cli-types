import * as fs from "fs-extra";
import { pathConstant } from "@config/constants/path.constant";
import { logAction } from "@config/logs/log.action";
import { initializationMessages } from "@config/constants/logs.messages";

class InitExecutor {
  public async initConfig() {
    try {
      await fs.copy(
        `${pathConstant.configExamplePath}`,
        pathConstant.userDbPath
      );

      console.log(
        `The config file added by directory ${pathConstant.userDbPath}/config. Set the file using your parameters.`
      );

      await logAction(initializationMessages.successMessages.config);
    } catch (err) {
      console.error(err);

      await logAction(
        initializationMessages.errorMessages.config + " Message: " + err.message
      );
    }
  }

  public async initMigrations() {
    try {
      fs.stat(`${pathConstant.userDbPath}`, async function (err) {
        if (!err) {
          await fs.mkdir(`${pathConstant.userMigrationPath}`);

          console.log(
            `Migrations initialized by directory ${pathConstant.userMigrationPath}.`
          );

          await logAction(initializationMessages.successMessages.migrations);
        } else if (err.code === "ENOENT") {
          await fs.mkdir(`${pathConstant.userDbPath}`);
          await fs.mkdir(`${pathConstant.userMigrationPath}`);

          console.log(
            `Migrations initialized by directory ${pathConstant.userMigrationPath}.`
          );

          await logAction(initializationMessages.successMessages.migrations);
        }
      });
    } catch (err) {
      console.error(err);

      await logAction(
        initializationMessages.errorMessages.migrations +
          " Message: " +
          err.message
      );
    }
  }

  public async initModels() {
    try {
      fs.stat(`${pathConstant.userDbPath}`, async function (err) {
        if (!err) {
          await fs.mkdir(`${pathConstant.userModelPath}`);
          await fs.mkdir(`${pathConstant.userModelPath}/interfaces`);

          console.log(
            `Models initialized by directory ${pathConstant.userModelPath}.`
          );

          await logAction(initializationMessages.successMessages.models);
        } else if (err.code === "ENOENT") {
          await fs.mkdir(`${pathConstant.userDbPath}`);
          await fs.mkdir(`${pathConstant.userModelPath}`);

          console.log(
            `Models initialized by directory ${pathConstant.userModelPath}.`
          );

          await logAction(initializationMessages.successMessages.models);
        }
      });
    } catch (err) {
      console.error(err);

      await logAction(
        initializationMessages.errorMessages.models + " Message: " + err.message
      );
    }
  }

  public async initSeeders() {
    try {
      fs.stat(`${pathConstant.userDbPath}`, async function (err) {
        if (!err) {
          await fs.mkdir(`${pathConstant.userSeederPath}`);

          console.log(
            `Seeders initialized by directory ${pathConstant.userSeederPath}.`
          );

          await logAction(initializationMessages.successMessages.seeders);
        } else if (err.code === "ENOENT") {
          await fs.mkdir(`${pathConstant.userDbPath}`);
          await fs.mkdir(`${pathConstant.userSeederPath}`);

          console.log(
            `Seeders initialized by directory ${pathConstant.userModelPath}.`
          );

          await logAction(initializationMessages.successMessages.seeders);
        }
      });
    } catch (err) {
      console.error(err);

      await logAction(
        initializationMessages.errorMessages.seeders +
          " Message: " +
          err.message
      );
    }
  }
}

export const initExecutor = new InitExecutor();
export const initialization = async () => {
  await initExecutor.initConfig();
  await initExecutor.initMigrations();
  await initExecutor.initModels();
  // await initExecutor.initSeeders();
};
