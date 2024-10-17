// function pascal(n: number) {
//   if (n === 0) return [];
//   if (n === 1) return [1];
//   let res = [];
//   for (let i = 1; i <= n; i++) {
//     let arr: number[] = [];
//     for (let j = 0; j < i; j++) {
//       if (j === 0 || j == i - 1) {
//         arr.push(1);
//       } else {
//         arr.push(res[i - 2][j - 1] + res[i - 2][j] );
//       }
//     }
//     res.push(arr);
//   }
//   return res;
// }
// console.log(pascal(5));





function pascal(n: number) {
  if (n === 1) {
    return [[1]];
  }
  if (n === 0) {
    return [];
  }
  let sebelum: number[][] = [];
  sebelum = pascal(n - 1);
  const sesudah = sebelum[sebelum.length - 1];
  const next = [1];
  for (let i = 0; i < sesudah.length - 1; i++) {
    next.push(sesudah[i] + sesudah[i + 1]);
  }
  next.push(1);
  sebelum.push(next);
  return sebelum;
}
console.log(pascal(5));





// //alternatif
// function pascal(params:type) {
  
// }