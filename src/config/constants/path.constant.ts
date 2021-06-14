import * as path from "path";

export const pathConstant = {
    userPath: process.cwd(),
    userDbPath: `${process.cwd()}/db`,
    libPath: path.resolve(__dirname, '../../../'),
    configExamplePath: `${path.resolve(__dirname, '../../../')}/src/components/Executors/examples/config.example`
}
