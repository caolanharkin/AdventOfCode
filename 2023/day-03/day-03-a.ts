import { input } from "./input";

export const gearRatios = (): number => {
  const matrix: string[][] = input.split("\n").map((x) => x.split(""));
  let result = 0;

  for (let row = 0; row < matrix.length; row++) {
    let currentNumber: number = 0;
    let hasAdjacentSymbol: boolean = false;

    for (let col = 0; col < matrix[row].length; col++) {
      if (isNaN(parseInt(matrix[row][col]))) {
        if (hasAdjacentSymbol) result += currentNumber;
        hasAdjacentSymbol = false;
        currentNumber = 0;
        continue;
      }

      if (!hasAdjacentSymbol) {
        hasAdjacentSymbol = checkAdjacent(matrix, row, col);
      }

      if (currentNumber === 0) {
        currentNumber = parseInt(matrix[row][col]);
      } else {
        currentNumber = currentNumber * 10 + parseInt(matrix[row][col]);
      }
    }

    if (hasAdjacentSymbol) result += currentNumber;
    hasAdjacentSymbol = false;
    currentNumber = 0;
  }

  return result;
};

const checkAdjacent = (
  matrix: string[][],
  row: number,
  col: number
): boolean => {
  return getAdjacent(matrix, row, col).some((x) => {
    return x !== null && isNaN(parseInt(x)) && x !== ".";
  });
};

const getAdjacent = (
  matrix: string[][],
  row: number,
  col: number
): string[] => {
  const rowCount = matrix.length;
  if (!rowCount) return;

  const colCount = matrix[row].length;

  return [
    row - 1 >= 0 && col - 1 >= 0 ? matrix[row - 1][col - 1] : null, // tl
    row - 1 >= 0 ? matrix[row - 1][col] : null, // tc
    row - 1 >= 0 && col + 1 < colCount ? matrix[row - 1][col + 1] : null, // tr
    col - 1 >= 0 ? matrix[row][col - 1] : null, // ml
    col + 1 < colCount ? matrix[row][col + 1] : null, // mr
    row + 1 < rowCount && col - 1 >= 0 ? matrix[row + 1][col - 1] : null, // bl
    row + 1 < rowCount ? matrix[row + 1][col] : null, // bc
    row + 1 < rowCount && col + 1 < colCount ? matrix[row + 1][col + 1] : null, // br
  ];
};
