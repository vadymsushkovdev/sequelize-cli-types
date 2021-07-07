import * as fs from "fs-extra";
import { pathConstant } from "../constants/path.constant";

export const logAction = async (action: string): Promise<void> => {
  await fs.appendFileSync(
    `${pathConstant.libPath}/src/config/logs/log.file.txt`,
    action + " " + new Date() + "\r\n"
  );
};

export const showLogs = async (): Promise<void> => {
  console.log(
    await fs.readFile(
      `${pathConstant.libPath}/src/config/logs/log.file.txt`,
      "utf-8"
    )
  );
};
