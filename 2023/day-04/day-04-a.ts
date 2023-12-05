import { input } from "./input";

export const scratchcards = (): number => {
  let formattedCard = {};
  input
    .split("\n")
    .map((x) => x.split(": "))
    .map((x) => {
      const cardSplit = x[1].split(" | ");
      formattedCard[x[0]] = {
        winning: cardSplit[0].split(" ").filter((x) => x != ""),
        mine: cardSplit[1].split(" ").filter((x) => x != ""),
      };
    });

  let result = 0;

  Object.keys(formattedCard).forEach((x) => {
    const matches = formattedCard[x].mine.filter((el: string) =>
      formattedCard[x].winning.includes(el)
    ).length;
    if (matches) result += Math.pow(2, matches - 1);
  });

  return result;
};
