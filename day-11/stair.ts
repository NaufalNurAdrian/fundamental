function stair(n: number): number {
  if (n === 1) return n;
  if (n === 2) return n;

  let a = 0;
  let b = 1;
  let c = 0;
  let res = 0;

  for (let i = 0; i < n - 2; i++) {
    c = a + b;
    a = b;
    b = c;
    res += c;
  }
  return res + 2;
}
console.log(stair(1));
