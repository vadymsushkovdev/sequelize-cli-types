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
