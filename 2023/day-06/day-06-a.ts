import { input } from "./input";

export const recordBeaters = (): number => {
  const [time, dist] = input.split("\n").map((x) =>
    x
      .split(":")[1]
      .trimStart()
      .split(/\s+/gi)
      .map((y) => Number(y))
  );

  let recordBreakers = new Array(time.length).fill(0);

  for (let i = 0; i < time.length; i++) {
    for (let j = 0; j < time[i]; j++) {
      if (j * (time[i] - j) > dist[i]) recordBreakers[i] += 1;
    }
  }

  return recordBreakers.reduce((acc, curr) => acc * curr, 1);
};
