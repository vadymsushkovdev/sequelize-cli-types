import * as fs from "fs-extra";
import { pathConstant } from "../../../config/constants/path.constant";


class InitExecutor {
  public init() {
    console.log(pathConstant.libPath);
  }

  public async initConfig() {
    try {
      await fs.copy(`${pathConstant.configExamplePath}`, pathConstant.userDbPath);
      console.log(`The config file has been added by directory ${pathConstant.userDbPath}/config. Set the file using your parameters`);
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
