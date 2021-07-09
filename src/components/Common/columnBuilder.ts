import { getSequelizeType } from "./getSequelizeType";
import { getInterfaceType } from "./getInterfaceType";

export const migrationColumnBuilder = (
  name: string,
  parameter: string
): string => {
  return (
    `\n      ${name}: {\n` +
    `        type: Sequelize.${getSequelizeType(parameter)},\n` +
    "      }"
  );
};

export const modelColumnBuilder = (name: string, parameter: string): string => {
  return (
    `\n  ${name}: {\n` +
    `    type: DataTypes.${getSequelizeType(parameter)}\n` +
    "  }"
  );
};

export const modelInterfaceColumnBuilder = (
  name: string,
  parameter: string
): string => {
  return `\n  ${name}: ${getInterfaceType(parameter)}`;
};
