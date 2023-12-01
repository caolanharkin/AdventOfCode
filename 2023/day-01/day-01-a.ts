export const valueSum = (input: string): number {
  return input
    .split("\n")
    .map((x) => {
      let stringNum = x.replace(/[a-z]+/gi, "").replace(/(?<!^).(?!$)/g, "");

      if (stringNum.length == 2) return parseInt(stringNum);

      return parseInt(stringNum + stringNum);
    })
    .reduce((acc, curr) => acc + curr, 0);
}
