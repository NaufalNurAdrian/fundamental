function romanToDecimal(n: string) {
  const roman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < n.length; i++) {
    const curr = roman[n.charAt(i)];
    const next = roman[n.charAt(i + 1)];

    curr < next ? res -= curr : res += curr;
  }
}
console.log(romanToDecimal("MD"));
