import fs from "fs";
import { pathConstant } from "../constants/path.constant";

export const checkNecessaryPath = () => {
  if (!fs.existsSync(`${pathConstant.userDbPath}`)) {
    console.log(
      'Database directory does not initialized. Please, use "sqlz init" or "sqlz i"'
    );

    process.exit(9);
  }
  if (!fs.existsSync(`${pathConstant.userConfigPath}`)) {
    console.log(
      'Config of database does not initialized. Please, use "sqlz init:config" or "sqlz i:con"'
    );

    process.exit(9);
  }
  if (!fs.existsSync(`${pathConstant.userModelPath}`)) {
    console.log(
      'Models of database does not initialized. Please, use "sqlz init:models" or "sqlz i:mod"'
    );

    process.exit(9);
  }
  if (!fs.existsSync(`${pathConstant.userSeederPath}`)) {
    console.log(
      'Seeders of database does not initialized. Please, use "sqlz init:seeders" or "sqlz i:see"'
    );

   process.exit(9);
  }
};
