// //exercise 1
// function hasil(arr:number[]): {lowest: number, highest: number, average: number} {
//     let lowest = arr[0]
//     let highest = arr[0]
//     let sum = 0
    
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] < lowest){
//             lowest = arr[i];
//         }
//         if (arr[i] > highest){
//             highest = arr[i];
//         }
//         sum += arr[i]
//     }
//     const average = sum / arr.length
//     return {lowest, highest, average}
// }
// const arr = [12, 5, 23, 18, 4, 45, 32] 
// console.log(hasil(arr))


//versi kang ilham
function minMax (arr: number[]) {
    const lowest: number = Math.min(...arr)
    const highest: number = Math.max(...arr)
    const average: number = arr.reduce((a, b) => a + b) / arr.length

    return {
        lowest: lowest,
        highest: highest,
        average: average

    }
}
console.log(minMax([12, 5, 23, 18, 4, 45, 32]))





// //exercise 2
// function hasil2 (str: string[]) {
//     let res: string = ""
//     for (let i = 0; i < str.length; i++){
//         if (i == str.length -1){
//             res += ` dan ${str[i]}`
//     } else {
//         res += `${str[i]},`
//     }
// }
// return res
// }
// const data = ["apple", "banana", "cherry", "date"]
// console.log(hasil2(data))

// //versi kang ilham
// function concate (input: string[]){
//     const str:string = input.pop() || ""
//     return input.join(", ") + ", and" + str
// }
// console.log(concate(["apple", "banana", "cherry", "date"]))






// //exercise 3
// function secondSmallest(num : number[]){
//     num.sort((a, b) => a - b)
//     const newNum = num.filter((item) => item > num[0])
    
//     return newNum[0]
// }

// console.log(secondSmallest([5, 3, 1, 7, 2, 6]))



// //exercise 4
// let arr0: number[] = [1, 2, 3]
// let arr2: number[] = [3, 2, 1]

// function sum2Arr (arr1: number[], arr2: number[]) :number[] {
//     const maxLength = Math.max(arr1.length, arr2.length);

//     return Array(maxLength).fill(0).map((_, index) => {
//         const value1 = index < arr1.length ? arr1[index] : 0;
//         const value2 = index < arr2.length ? arr2[index] : 0;
//         return value1 + value2;
//     });
// }
// console.log(sum2Arr(arr0,  arr2))







// //exercise 5
// function tambahElemenUnik(arr: number[], elemenBaru: number): number[] {
//     if (arr.includes(elemenBaru) == false) {          //negasi (jika belum ada)
//         arr.push(elemenBaru);
//     }
//     return arr;
// }

// let arr1 = [1, 2, 3, 4];
// console.log(tambahElemenUnik(arr1, 4)); 
// console.log(tambahElemenUnik(arr1, 7)); 

// //versi kang ilham

// function myFunc () {
//     arr3.push(4)
//     return "Hello World"
// }
// const arr3: number[] = [1, 2, 3, 4]

// console.log(arr3)
// console.log(myFunc())


//exercise slide 2
// nomor 1
function mixedArray(input: any[]){
    let arr: number = 0
    for (let i = 0; i < input.length; i++) {
        if (typeof input[i] == "number" ){
            arr += input[i]
        }
    }
    return arr
}

const mixArr: any = ["3", 1, "string", null, false, undefined, 2]

console.log(mixedArray(mixArr))

//nomor 2