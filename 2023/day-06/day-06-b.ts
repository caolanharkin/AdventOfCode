import { input } from "./input";

export const recordBeaters = (): number => {
  const [time, dist] = input
    .split("\n")
    .map((x) => Number(x.split(":")[1].trimStart().replace(/\s+/gi, "")));

  let recordBreakers = 0;

  for (let j = 0; j < time; j++) {
    if (j * (time - j) > dist) recordBreakers += 1;
  }

  return recordBreakers;
};
