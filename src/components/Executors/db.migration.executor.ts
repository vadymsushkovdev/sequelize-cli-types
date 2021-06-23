import { up } from "@components/Umzug/umzug.config/umzu.config";

class DbMigrationExecutor {
  public async up() {
    try {
      await up();
    } catch (err) {
      console.error(err);
    }
  }

  public async down() {
    try {
      await up();
    } catch (err) {
      console.error(err);
    }
  }
}

export const dbMigrationExecutor = new DbMigrationExecutor();
