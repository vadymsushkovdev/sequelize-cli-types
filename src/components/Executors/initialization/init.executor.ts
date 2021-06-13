import * as fs from "fs-extra";

class InitExecutor {
  public init() {}

  public async initConfig() {
    try {
      await fs.copy("./src/components/Executors/examples/config.example", `${process.cwd()}/db`);
      console.log(`The config file has been added by directory ${process.cwd()}/db/config. Set the file using your parameters`);
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
