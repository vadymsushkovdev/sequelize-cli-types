export const endOfStringFromManyToOne = (word: string) => {
  if (word.endsWith("ies")) {
    return word.substring(0, word.length - 3).concat("y");
  }
  if (word.endsWith("es")) {
    return word.substring(0, word.length - 2);
  }

  return word.substring(0, word.length - 1);
};

function format(i: number) {
  return parseInt(String(i), 10) < 10 ? "0" + i : i;
}

export const dateOfCreatingFile = () => {
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

export const migrationColumnBuilder = (name: string, parameter: string) => {
  if (parameter === "str" ?? parameter === "string") {
    return (
      `\n       ${name}: {\n` + `         type: Sequelize.STRING,\n` + "      }"
    );
  }
  if (parameter === "int" ?? parameter === "integer") {
    return (
      `\n       ${name}: {\n` +
      `         type: Sequelize.INTEGER,\n` +
      "      }"
    );
  }
  if (parameter === "date") {
    return (
      ` \n      ${name}: {\n` + `         type: Sequelize.DATE,\n` + "      }"
    );
  }
};

export const modelColumnBuilder = (
  name: string,
  parameter: Array<string>
) => {};
