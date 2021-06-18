import * as fs from "fs-extra";
import { pathConstant } from "@config/constants/path.constant";

export const logAction = async (action: string) => {
  await fs.appendFileSync(`${pathConstant.libPath}/src/config/logs/log.file.txt`, action + ' ' + new Date());
}

export const showLogs = async () => {
  console.log(await fs.readFile(`${pathConstant.libPath}/src/config/logs/log.file.txt`, 'utf-8'));
}
