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

  return input
    .split("\n")
    .map((x) => x.split(" "))
    .reduce((acc, x) => {
      return acc + shapeScore[x[1]] + resultScore[x[0]][x[1]];
    }, 0);
};
