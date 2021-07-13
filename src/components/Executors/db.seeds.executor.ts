import { umzug } from "../../config/umzug/umzug.config";
import { pathConstant } from "../../config/constants/path.constant";

class DbSeedsExecutor {
  public async up() {
    try {
      await umzug(`${pathConstant.userSeederPath}`).then((umzugCore) =>
        umzugCore.up()
      );

      console.log("All seeds performed successfully");
    } catch (err) {
      console.error(err);
    }
  }

  public async down() {
    try {
      await umzug(`${pathConstant.userSeederPath}`).then((umzugCore) =>
        umzugCore.down()
      );

      console.log("All seeds is dropped");
    } catch (err) {
      console.error(err);
    }
  }

  public async specificDown(migration: Array<string>) {
    try {
      await umzug(`${pathConstant.userSeederPath}`).then((umzugCore) =>
        umzugCore.down(migration)
      );

      console.log(`${migration} is dropped`);
    } catch (err) {
      console.error(err);
    }
  }

  public async pending() {
    try {
      console.log(
        await umzug(`${pathConstant.userMigrationPath}`).then((umzugCore) =>
          umzugCore.pending()
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  public async executed() {
    try {
      console.log(
        await umzug(`${pathConstant.userMigrationPath}`).then((umzugCore) =>
          umzugCore.executed()
        )
      );
    } catch (err) {
      console.error(err);
    }
  }
}

export const dbSeedsExecutor = new DbSeedsExecutor();
