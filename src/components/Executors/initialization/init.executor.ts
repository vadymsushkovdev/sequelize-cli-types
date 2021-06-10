import * as fs from "fs-extra";

class InitExecutor {
  public init() {}

  public async initConfig() {
    try {
      await fs.copy("/examples/config/config.ts", "/tmp/mynewfile");
      console.log("success!");
    } catch (err) {
      console.error(err);
    }
  }

  public initMigrations() {

  }

  public initModels() {

  }

  public initSeeders() {

  }
}

export const initExecutor = new InitExecutor();
