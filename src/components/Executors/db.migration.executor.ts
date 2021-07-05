import { umzug } from "@config/umzug/config";

class DbMigrationExecutor {
  public async up() {
    try {
      await umzug().up();
      console.log("All migrations performed successfully");
    } catch (err) {
      console.error(err);
    }
  }

  public async down() {
    try {
      await umzug().down();
      console.log("All tables have been drops");
    } catch (err) {
      console.error(err);
    }
  }

  public async specificDown(migration: Array<string>) {
    try {
      await umzug().down(migration);
      console.log(`${migration} have been drops`);
    } catch (err) {
      console.error(err);
    }
  }

  public async pending() {
    try {
      console.log(await umzug().pending());
    } catch (err) {
      console.error(err);
    }
  }

  public async executed() {
    try {
      console.log(await umzug().executed());
    } catch (err) {
      console.error(err);
    }
  }
}

export const dbMigrationExecutor = new DbMigrationExecutor();
