export enum typeId {
  "str" = 1,
  "string" = 1,
  "int" = 2,
  "integer" = 2,
  "bool" = 3,
  "boolean" = 3,
  "txt" = 4,
  "text" = 4,
  "date" = 5,
  "bi" = 6,
  "bigint" = 6,
  "ar" = 7,
  "array" = 7,
  "json" = 8,
  "ch" = 9,
  "char" = 9,
}

export const stringInterfaceIds = [1, 4, 9];
export const numberInterfaceIds = [2];
export const booleanInterfaceIds = [3];
export const dateInterfaceIds = [5];
export const bigintInterfaceIds = [6];
export const arrayInterfaceIds = [7];
export const jsonInterfaceIds = [8];
