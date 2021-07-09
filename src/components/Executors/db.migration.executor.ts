import { umzug } from "../../config/umzug/migration.config";

class DbMigrationExecutor {
  public async up() {
    try {
      await umzug().then((umzugCore) => umzugCore.up());

      console.log("All migrations performed successfully");
    } catch (err) {
      console.error(err);
    }
  }

  public async down() {
    try {
      await umzug().then((umzugCore) => umzugCore.down());

      console.log("All tables have been drops");
    } catch (err) {
      console.error(err);
    }
  }

  public async specificDown(migration: Array<string>) {
    try {
      await umzug().then((umzugCore) => umzugCore.down(migration));

      console.log(`${migration} have been drops`);
    } catch (err) {
      console.error(err);
    }
  }

  public async pending() {
    try {
      console.log(await umzug().then((umzugCore) => umzugCore.pending()));
    } catch (err) {
      console.error(err);
    }
  }

  public async executed() {
    try {
      console.log(await umzug().then((umzugCore) => umzugCore.executed()));
    } catch (err) {
      console.error(err);
    }
  }
}

export const dbMigrationExecutor = new DbMigrationExecutor();
