import { input } from "./input";

const letterMapping = {
  J: 1,
  T: 10,
  Q: 12,
  K: 13,
  A: 14,
};

export const camelCards = (): number => {
  const lines = input.split("\n");

  let hands = {};
  lines.map((line) => {
    let split = line.split(" ");
    hands[split[0]] = {
      stake: Number(split[1]),
      strength: determineHandStrength(split[0]),
    };
  });

  let handsSorted = Object.keys(hands)
    .map((hand) => ({ hand: hand, ...hands[hand] }))
    .sort(sortHand);

  return handsSorted.reduce((acc, curr, i) => {
    return acc + (i + 1) * hands[curr.hand].stake;
  }, 0);
};

const determineHandStrength = (hand: string): number => {
  let cardCount = {};

  for (const c of hand) {
    const count = (cardCount[c] || 0) + 1;
    cardCount[c] = count;
  }

  if (Object.keys(cardCount).filter((x) => x === "J").length) {
    const mostFreq = Object.keys(cardCount)
      .filter((x) => x !== "J")
      .reduce((a, b) => {
        return cardCount[a] > cardCount[b] ? a : b;
      }, "");

    cardCount[mostFreq] = cardCount[mostFreq] + cardCount["J"];
    delete cardCount["J"];
  }

  return determineHand(cardCount);
};

const determineHand = (hand: {}): number => {
  const uniqueCards = Object.keys(hand).length;

  if (uniqueCards === 1) return 7;

  if (uniqueCards === 2) {
    return Object.values(hand).filter((x) => x === 4).length ? 6 : 5;
  }

  if (uniqueCards === 3) {
    return Object.values(hand).filter((x) => x === 3).length ? 4 : 3;
  }

  if (uniqueCards === 4) return 2;

  return 1;
};

const sortHand = (a, b) => {
  if (a.strength !== b.strength) return a.strength - b.strength;

  for (let i = 0; i < a.hand.length; i++) {
    if (a.hand[i] === b.hand[i]) continue;

    return (
      Number(letterMapping[a.hand[i]] || a.hand[i]) -
      Number(letterMapping[b.hand[i]] || b.hand[i])
    );
  }
};
