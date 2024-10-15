// function single(s: number[]): number {
//     let hasil = 0
//     for (const num of s) {
//         hasil ^= num
//     }

//     return hasil
// }
// console.log(single([1, 1, 2, 2, 3]));

//alternatif
function single(arr: number[]) {
  return arr.filter(
    (val, idx, num) => num.filter((item) => item == val).length == 1
  );
}
console.log(single([1, 1, 2, 2, 4, 5]));
