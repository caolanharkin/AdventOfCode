import { input } from "./input";

const stratCounter = () => {
  const shapeScore = {
    X: 1,
    Y: 2,
    Z: 3,
  };

  const resultScore = {
    A: {
      X: 3,
      Y: 6,
      Z: 0,
    },
    B: {
      X: 0,
      Y: 3,
      Z: 6,
    },
    C: {
      X: 6,
      Y: 0,
      Z: 3,
    },
  };

  const cleanInput: string[][] = input.split("\n").map((x) => x.split(" "));

  let total = 0;

  cleanInput.forEach((x) => {
    total += shapeScore[x[1]];
    total += resultScore[x[0]][x[1]];
  });

  return total;
};
