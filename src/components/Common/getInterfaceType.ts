import {
  arrayInterfaceIds,
  bigintInterfaceIds,
  booleanInterfaceIds,
  dateInterfaceIds,
  jsonInterfaceIds,
  numberInterfaceIds,
  stringInterfaceIds,
  typeId,
} from "./common.constants";

export const getInterfaceType = (parameter: string) => {
  if (stringInterfaceIds.includes(typeId[parameter])) {
    return "string";
  }
  if (numberInterfaceIds.includes(typeId[parameter])) {
    return "number";
  }
  if (booleanInterfaceIds.includes(typeId[parameter])) {
    return "boolean";
  }
  if (dateInterfaceIds.includes(typeId[parameter])) {
    return "Date";
  }
  if (bigintInterfaceIds.includes(typeId[parameter])) {
    return "bigint";
  }
  if (arrayInterfaceIds.includes(typeId[parameter])) {
    return "Array";
  }
  if (jsonInterfaceIds.includes(typeId[parameter])) {
    return "JSON";
  }
  throw new Error(`Unknown parameter ${parameter}`);
};
