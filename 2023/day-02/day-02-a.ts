const cubeMap = {
  red: 12,
  green: 13,
  blue: 14,
};

export const validCubes = (input: string): number => {
  const split = input.split("\n").map((x) => {
    const gameSplit = x.split(": ");

    let game = {};
    game[gameSplit[0].replace("Game ", "")] = gameSplit[1].split("; ");

    return game;
  });

  let result = 0;

  split.forEach((game, index) => {
    let validGame = true;
    console.log(game);
    game[index + 1].forEach((set) => {
      const setSplit = set.split(", ");

      setSplit.forEach((cubes) => {
        const cubesPulled = cubes.split(" ");

        if (cubesPulled[0] > cubeMap[cubesPulled[1]]) {
          validGame = false;
        }
      });
    });

    if (validGame) {
      result += index + 1;
    }
  });

  return result;
};
