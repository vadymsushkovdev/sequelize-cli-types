import * as path from "path";

export const pathConstant = {
  userPath: process.cwd(),
  userDbPath: `${process.cwd()}/db`,
  userMigrationPath: `${process.cwd()}/db/migrations`,
  userConfigPath: `${process.cwd()}/db/config`,
  userModelPath: `${process.cwd()}/db/models`,
  userSeederPath: `${process.cwd()}/db/seeders`,
  libPath: path.resolve(__dirname, "../../../"),
  configExamplePath: `${path.resolve(
    __dirname,
    "../../../"
  )}/src/components/Executors/examples/config.example`,
};
