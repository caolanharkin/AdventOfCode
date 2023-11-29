import { input } from "./input";

const stratCounter = () => {
  const resultScore = {
    X: 0,
    Y: 3,
    Z: 6,
  };

  const shapeScore = {
    A: {
      //rock
      X: 3, // lose w/ scissors
      Y: 1, // draw w/ rock
      Z: 2, // win w/ paper
    },
    B: {
      // paper
      X: 1, // lose w/ rock
      Y: 2, // draw w/ paper
      Z: 3, // win w/ scissors
    },
    C: {
      // scissors
      X: 2, // lose w/ paper
      Y: 3, // win w/ scissors
      Z: 1, // win w/ rock
    },
  };

  const cleanInput: string[][] = input.split("\n").map((x) => x.split(" "));

  let total = 0;

  cleanInput.forEach((x) => {
    total += resultScore[x[1]];
    total += shapeScore[x[0]][x[1]];
  });

  return total;
};
