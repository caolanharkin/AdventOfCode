const numMap = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

export const valueSum = (input: string): number => {
  const regex = `(?=(${Object.keys(numMap).join("|")}|\\d))`;

  return input
    .split("\n")
    .map((x) => {
      let matches = [...x.matchAll(new RegExp(regex, "gi"))];

      const first = matches[0][1];
      const last = matches[matches.length - 1][1];

      return parseInt(`${numMap[first] ?? first}${numMap[last] ?? last}`);
    })
    .reduce((acc, curr) => acc + curr, 0);
};
