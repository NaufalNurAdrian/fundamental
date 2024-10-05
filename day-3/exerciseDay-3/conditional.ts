let num1 = 42;
let num2 = 27;
let num3 = 18;

let smallest, middle, largest; // Variabel untuk menyimpan hasil urutan

if (num1 <= num2 && num1 <= num3) {
  smallest = num1;
  if (num2 <= num3) {
    middle = num2;
    largest = num3;
  } else {
    middle = num3;
    largest = num2;
  }
} else if (num2 <= num1 && num2 <= num3) {
  smallest = num2;
  if (num1 <= num3) {
    middle = num1;
    largest = num3;
  } else {
    middle = num3;
    largest = num1;
  }
} else {
  smallest = num3;
  if (num1 <= num2) {
    middle = num1;
    largest = num2;
  } else {
    middle = num2;
    largest = num1;
  }
}

console.log(smallest, middle, largest); // Output: 18, 27, 42



//versi kang ilham
let numm1 = 42;
let numm2 = 27;
let numm3 = 18;


if (num1 > num2){
  const n: number = numm1
  numm1 = numm2
  numm2 = n
}
if (numm2 > numm3){
  const n: number = numm2
  numm2 = numm3
  numm3 = n
}
if (num1 > num2){
  const n: number = numm1
  numm1 = numm2
  numm2 = n
}

console.log(numm1, numm2, numm3)

