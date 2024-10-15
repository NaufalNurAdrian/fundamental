function hitung(str: string) {
  const alfabet: { [key: string]: number } = {
    a: 1,
    s: 19,
    y: 25,
  };
  let res: number = 0;
  const arralfa: string[] = str.split("");
  for (let i = 0; i < arralfa.length; i++) {
    res += alfabet[arralfa[i].toLowerCase()];
  }
  console.log(res);
}
hitung("Saya");