import { func } from "@tensorflow/tfjs-data";

function excel(s: string) {
  const str: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 23,
    y: 25,
    z: 26,
  };
  let res = 0;
  let x = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    res += 26 ** i * str[s[x--]];
  }
  return res;
}

console.log(excel("aaa"));

//alternatif
function alpabetPlus(kata: string): number {
  let result = 0;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < kata.length; i++) {
    const charIndex = alphabet.indexOf(kata[i]) + 1;
    result = result * 26 + charIndex;
  }

  return result;
}

//
function myfunc(str: string) {
  return str.split("").reduce((a, b) => a * 26 + parseInt(b, 36) - 9, 0);
}
console.log(myfunc("AA"));
