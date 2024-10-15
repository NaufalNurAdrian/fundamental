function sama(s: string, t: string) {
  return (
    s.toLowerCase().split("").sort().join("") ===
    t.toLowerCase().split("").sort().join("")
  );
}
console.log(sama("Anagram", "Nagaram"));
console.log(sama("Garam", "Ragam"));
console.log(sama("Rat", "Car"));
