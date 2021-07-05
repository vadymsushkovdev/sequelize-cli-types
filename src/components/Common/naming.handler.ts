export const endOfStringFromManyToOne = (word: string): string => {
  if (word.endsWith("ies")) {
    return word.substring(0, word.length - 3).concat("y");
  }
  if (word.endsWith("es")) {
    return word.substring(0, word.length - 2);
  }
  if (word.endsWith("s")) {
    return word.substring(0, word.length - 1);
  }

  return word;
};

function format(i: number): string | number {
  return parseInt(String(i), 10) < 10 ? "0" + i : i;
}

export const dateOfCreatingFile = (): string => {
  const date = new Date();

  return [
    date.getUTCFullYear(),
    format(date.getUTCMonth() + 1),
    format(date.getUTCDate()),
    format(date.getUTCHours()),
    format(date.getUTCMinutes()),
    format(date.getUTCSeconds()),
  ].join("");
};

export const migrationColumnBuilder = (
  name: string,
  parameter: string
): string => {
  if (parameter === "str" || parameter === "string") {
    return (
      `\n      ${name}: {\n` + `        type: Sequelize.STRING,\n` + "      }"
    );
  }
  if (parameter === "int" || parameter === "integer") {
    return (
      `\n      ${name}: {\n` + `        type: Sequelize.INTEGER,\n` + "      }"
    );
  }
  if (parameter === "date") {
    return (
      ` \n     ${name}: {\n` + `        type: Sequelize.DATE,\n` + "      }"
    );
  }

  throw new Error(`Unknown parameter ${parameter}`);
};

export const modelColumnBuilder = (name: string, parameter: string): string => {
  if (parameter === "str" || parameter === "string") {
    return `\n  ${name}: {\n` + `    type: DataTypes.STRING\n` + "  }";
  }
  if (parameter === "int" || parameter === "integer") {
    return `\n  ${name}: {\n` + `    type: DataTypes.INTEGER\n` + "  }";
  }
  if (parameter === "date") {
    return `\n  ${name}: {\n` + `    type: DataTypes.DATE\n` + "  }";
  }

  throw new Error(`Unknown parameter ${parameter}`);
};

export const modelInterfaceColumnBuilder = (
  name: string,
  parameter: string
): string => {
  if (parameter === "str" || parameter === "string") {
    return `\n  ${name}: string`;
  }
  if (parameter === "int" || parameter === "integer") {
    return `\n  ${name}: number`;
  }
  if (parameter === "date") {
    return `\n  ${name}: Date`;
  }
  throw new Error(`Unknown parameter ${parameter}`);
};
