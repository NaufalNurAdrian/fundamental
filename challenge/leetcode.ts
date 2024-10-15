// //412 fizz buzz
// function fizzBuzz(n: number): string[] {
//     let hasil: string[] = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             hasil.push("FizzBuzz");
//         } else if (i % 3 == 0) {
//             hasil.push("Fizz");
//         } else if (i % 5 == 0) {
//             hasil.push("Buzz");
//         } else {
//             hasil.push(i.toString());
//         }
//     }
//     return hasil
// };

import { ifft } from "@tensorflow/tfjs";



// //2469
// function convertTemperature(celsius: number): number[] {
//     let res: number[] = []
//     const kelvin = celsius + 273.15
//     const Fahrenheit = celsius * 1.80 + 32.00
//     res = [kelvin, Fahrenheit]
//     return res
// };

// //3190
// function minimumOperations(nums: number[]): number {
//     let totalOperations = 0;
//     for (let num of nums) {
//         const remainder = num % 3;
//         if (remainder === 1) {
//             totalOperations += 1;
//         } else if (remainder === 2) {
//             totalOperations += 1;
//         }
//     }
//     return totalOperations;
// }

// //2769
// function theMaximumAchievableX(num: number, t: number): number {
//     let hasil: number = 0
//     hasil += num + t*2
//     return hasil
// };


// //2396
// function isStrictlyPalindromic(n: number): boolean {
//     return false
// };

// //2235
// function sum(num1: number, num2: number): number {
//     let sumarr: number = 0
//     sumarr += num1 + num2
//     return sumarr
// };

// //338
function countBits(n: number): number[] {
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
};

// //69
// function mySqrt(x: number): number {
//     let a: number = Math.floor(Math.sqrt(x))
//     return a
// };

// //709
// function toLowerCase(s: string): string {
//     return s.toLowerCase()
// };

// //2703
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

// function argumentsLength(...args: JSONValue[]): number {
//     return args.length
// };

// //9
// // function isP



//50
function myPow(x: number, n: number): number {
    return x ** n
};
const x = 2.00000
const n = -2
console.log(myPow(x, n));







// 
// function hitung(n: number[]) {
//     for (let i = 0; i <= n.length; i++) {
//         if (i % 2 === 0) {
//             return true
//         } else {
//             return false
//         }
//     }
// }
// const n: number[] = [10]
// console.log(`${n} ${hitung(n)}`);



