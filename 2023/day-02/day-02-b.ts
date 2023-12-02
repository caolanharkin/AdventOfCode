export const validCubes = (input: string): number => {
  let split = input.split("\n").map((x) => {
    let gameSplit = x.split(": ");
    let [a, b] = [gameSplit[0].replace("Game ", ""), gameSplit[1]];
    let game = {};
    game[a] = b.split("; ");

    return game;
  });

  let result = 0;

  split.forEach((game, index) => {
    let cubeCount = {
      red: 0,
      green: 0,
      blue: 0,
    };

    game[index + 1].forEach((set) => {
      let setSplit = set.split(", ");

      setSplit.forEach((cube) => {
        let cubesPulled = cube.split(" ");

        cubeCount[cubesPulled[1]] = Math.max(
          cubeCount[cubesPulled[1]],
          cubesPulled[0]
        );
      });
    });

    result += Object.values(cubeCount).reduce((acc, curr) => acc * curr, 1);
  });

  return result;
};
