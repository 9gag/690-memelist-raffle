import tablemark from "tablemark";
import winners from "../data/winners.json";

const rows = [];
for (const [token, wallet] of Object.entries(winners)) {
  rows.push({ potatoz: `[#${token}](https://grow.memeland.com/potatoz/${token})`, wallet });
}

console.log(`# 690 Memelist Raffle\n\n## Winners\n`);
console.log(tablemark(rows, { columns: ["Potatoz", "Wallet"] }));
