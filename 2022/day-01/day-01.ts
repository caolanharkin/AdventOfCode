import { elves } from "./input";

const calorieCounter = (elves: string): number => {
  const split = elves.split("\n\n").map((x) => x.split("\n"));
  let totals = new Array<number>(split.length).fill(0);

  split.forEach((elf, index) => {
    totals[index] = elf.reduce((acc, curr) => acc + parseInt(curr), 0);
  });

  return totals
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr, 0);
};

console.log(calorieCounter(elves));
