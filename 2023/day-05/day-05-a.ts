import { input } from "./input";

export const lowestLocation = (): number => {
  const splitInput = input.split("\n\n");
  const seeds = splitInput[0].split(": ")[1].split(" ").map(Number);

  const mappings = splitInput
    .slice(1)
    .map((x) => x.split(":")[1])
    .map((x) => x.split("\n").slice(1))
    .map((x) => x.map((y) => y.split(" ").map(Number)));

  let minLocation: number = Number.MAX_SAFE_INTEGER;

  for (let seed of seeds) {
    let location = seed;

    for (let i = 0; i < mappings.length; i++) {
      for (let mapping of mappings[i]) {
        const [dest, source, range] = [mapping[0], mapping[1], mapping[2]];

        if (location >= source && location <= source + (range - 1)) {
          location = dest + (location - source);
          break;
        }
      }
    }

    minLocation = Math.min(minLocation, location);
  }

  return minLocation;
};
