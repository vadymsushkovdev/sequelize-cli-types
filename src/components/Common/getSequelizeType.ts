import { typeId } from "./common.constants";

enum columnSequelizeType {
  "STRING" = 1,
  "INTEGER" = 2,
  "BOOLEAN" = 3,
  "TEXT" = 4,
  "DATE" = 5,
  "BIGINT" = 6,
  "ARRAY" = 7,
  "JSON" = 8,
  "CHAR" = 9,
}

export const getSequelizeType = (parameter: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const sequelizeType: string = columnSequelizeType[typeId[parameter]];

  if (sequelizeType) {
    return sequelizeType;
  }

  throw new Error(`Unknown parameter ${parameter}`);
};
