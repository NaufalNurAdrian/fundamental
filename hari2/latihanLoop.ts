// const bilanganGanjil :number = 25;
// const bilanganGenap: number = 2;

// if(bilanganGenap % 2 == 0) {
//     console.log(`${bilanganGenap} Even.`);
// }
// else{
//     console.log(`${bilanganGenap} Odd.`);
// }
// if(bilanganGanjil % 2 == 1) {
//     console.log(`${bilanganGanjil} Odd.`);
// }
// else{
//     console.log(`${bilanganGanjil} Even.`);
// }


// // prime
// const num:number = 7

// let divider: number = 0
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         divider++
//     }
// }

// console.log(
//     divider == 2 ?
//     `${num} is a prime number` :
//     `${num} is not a prime number`
// )

// // //N
// const bilangan:  number = 5

// let penampungBilangan: number = 0

// for (let i = 1; i <= bilangan; i++ ){
//     penampungBilangan += i
// }
// console.log(`${penampungBilangan}`)




// //alternatif

// const bilangan2: number = 5

// let res: number = 0
// let desc: string = ""
// for (let i = 1; i <= bilangan2; i++ ){
//     res += i
//     if (i == 1) {
//         desc += "1"
//     } else {
//         desc += ` + ${i}`
//     }
// }
// console.log(res)
// console.log(`${desc} = ${res}`)




function factorial(x: any): any
    { 
    if (x == 0)               //jika x adalah 0
    {
    return 1;                 //faktorial 0 adalah 1
    }
    return x * factorial(x-1);       
    }
console.log(factorial(4));
console.log(factorial(6));








// function fibonacci_numbers(n: number): number {
//     if (n == 0) {
//         return 0;
//     } else if (n == 1) {
//         return 1;
//     } else {
//         return fibonacci_numbers(n - 2) + fibonacci_numbers(n - 1);
//     }
// }
// console.log(fibonacci_numbers(15))



//alternatif
// const n: number = 15
// let a: number = 0
// let b: number = 1

// for (let i = 1; 1 < n; i++){
//     let nexNumber = a + b
// a = b
// b = nexNumber
// }
// console.log(b)










