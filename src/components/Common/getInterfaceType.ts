import {
  arrayInterfaceIds,
  bigintInterfaceIds,
  booleanInterfaceIds,
  dateInterfaceIds, jsonInterfaceIds,
  numberInterfaceIds,
  stringInterfaceIds,
  typeId
} from "./common.constants";

export const getInterfaceType = (parameter: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (stringInterfaceIds.includes(typeId[parameter])) {
    return 'string';
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (numberInterfaceIds.includes(typeId[parameter])) {
    return 'number';
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (booleanInterfaceIds.includes(typeId[parameter])) {
    return 'boolean';
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (dateInterfaceIds.includes(typeId[parameter])) {
    return 'Date';
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (bigintInterfaceIds.includes(typeId[parameter])) {
    return 'bigint';
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (arrayInterfaceIds.includes(typeId[parameter])) {
    return 'Array';
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (jsonInterfaceIds.includes(typeId[parameter])) {
    return 'JSON';
  }
   throw new Error(`Unknown parameter ${parameter}`)
}
