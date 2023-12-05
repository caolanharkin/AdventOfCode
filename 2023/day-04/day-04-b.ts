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

  const cardCount = new Array(Object.keys(formattedCard).length).fill(1);

  Object.keys(formattedCard).forEach((x, i) => {
    const matches = formattedCard[x].mine.filter((el: string) =>
      formattedCard[x].winning.includes(el)
    ).length;

    if (matches) {
      for (let j = 1; i <= matches; j++) {
        cardCount[i + j] = cardCount[i] + cardCount[i + j];
      }
    }
  });

  return cardCount.reduce((acc, curr) => acc + curr, 0);
};
