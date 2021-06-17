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

export const columnBuilder = (name: string, parameter: string) => {
  if (parameter === "str" ?? parameter === "string") {
    parameter = "STRING";
    return (
      `       ${name}: {\n` +
      `         type: Sequelize.${parameter},\n` +
      "      }\n"
    );
  };
  if (parameter === "int" ?? parameter === "integer") {
    parameter = "NUMBER";
    return (
      `       ${name}: {\n` +
      `         type: Sequelize.${parameter},\n` +
      "      }\n"
    );
  };
  if (parameter === "date") {
    parameter = "DATE";
    return (
      `       ${name}: {\n` +
      `         type: Sequelize.${parameter},\n` +
      "      }\n"
    );
  };
};
