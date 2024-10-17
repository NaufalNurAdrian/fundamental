// function profit(data: number[]) {
//   const beli = Math.min(...data);

import { math } from "@tensorflow/tfjs";
import { func } from "@tensorflow/tfjs-data";

//   const hasilMin = data.filter((val, idx, arr) => idx > beli);

//   const jual = Math.max(...hasilMin);

//   if (jual > beli) {
//     return jual - beli;
//   } else {
//     return 0;
//   }
// }
// console.log(profit([7, 1, 5, 3, 6, 4]));
// console.log(profit([7, 6, 4, 3, 1]));

function profit(n: number[]) {
  const res = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j >= 0; j--) {
      res.push(n[i] - n[i]);
    }
  }
  return Math.max(...n) - Math.min(...n);

}
console.log(profit([7, 1, 3, 5, 6]));
