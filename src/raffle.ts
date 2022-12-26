import createLotto from "lotto-draw";
import participants from "../data/participants.json";

const lotto = createLotto<string>();

// Block Height: https://etherscan.io/block/16269086
const raffle: Record<string, string> = participants;
Object.keys(raffle).map((potatoz) => lotto.add(potatoz));

const winners: Record<string, string> = {};
lotto.drawMultiple(690, { redrawable: false }).map((winner) => {
  winners[winner] = raffle[winner];
});

console.log(JSON.stringify(winners, null, 2));
