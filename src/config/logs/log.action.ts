import * as fs from "fs-extra";
import { pathConstant } from "../constants/path.constant";

export const logAction = async (action: string) => {
  await fs.appendFileSync(`${pathConstant.libPath}/src/config/logs/log.file.txt`, action + ' ' + new Date() + '\r\n');
}
