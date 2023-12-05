import { input } from "./input";

const gearRatios = (): number => {
  const matrix: string[][] = input.split("\n").map((x) => x.split(""));

  let result = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === "*") {
        let partNumbers = [];

        checkAdjacent(
          matrix,
          row,
          col,
          (matrix: string[][], adjRow: number, adjCol: number) => {
            if (isValidCoord(matrix, adjRow, adjCol)) {
              if (isValidNumber(matrix[adjRow][adjCol])) {
                let number = workoutFullNumber(matrix, adjRow, adjCol);
                partNumbers = [...partNumbers, number];
              }
            }
          }
        );

        if (partNumbers.length === 2) result += partNumbers[0] * partNumbers[1];
      }
    }
  }

  return result;
};

const isValidNumber = (value: string) => !isNaN(parseInt(value));

const isValidCoord = (value: string[][], row: number, col: number): boolean => {
  if (value == null) return false;

  return (
    Object.prototype.hasOwnProperty.call(value, row) &&
    Object.prototype.hasOwnProperty.call(value[row], col)
  );
};

const checkAdjacent = (
  matrix: string[][],
  row: number,
  col: number,
  handleAdjacent: (matrix: string[][], row: number, col: number) => any
): void => {
  handleAdjacent(matrix, row - 1, col - 1);
  handleAdjacent(matrix, row - 1, col);
  handleAdjacent(matrix, row - 1, col + 1);
  handleAdjacent(matrix, row, col - 1);
  handleAdjacent(matrix, row, col + 1);
  handleAdjacent(matrix, row + 1, col - 1);
  handleAdjacent(matrix, row + 1, col);
  handleAdjacent(matrix, row + 1, col + 1);
};

const workoutFullNumber = (
  matrix: string[][],
  row: number,
  col: number
): number => {
  let fullNumber: string = "";
  let position: number = col;

  // move left to beginning of number
  while (isValidNumber(matrix[row][position])) {
    position -= 1;
  }
  // reposition to beginning of number
  position += 1;

  // move right and track digits
  while (isValidNumber(matrix[row][position])) {
    fullNumber += matrix[row][position];
    matrix[row][position] = "."; // prevent double counting values
    position += 1;
  }

  return parseInt(fullNumber);
};
