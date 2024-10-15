/*
    input = [1, 2, 3, 4, 5, 6]
    output = [6, 1, 5, 2, 4, 3]

    input = [11, 21, 22, 5, 30, 13]
    output = [30, 5, 22, 11, 21, 14]
*/

// function sort(x: number[]) {
//     x.sort((a, b) => a - b)
//     let res: number[] = []
//     let hasilAkhir = []

//    for(let i = 0; i < x.length; i++){
//         res.push(x[x.length - 1 - i])
//         res.push(x[i])
//    }

//    let hasil = new Set(res)

//    for (const result of hasil) {
//        hasilAkhir.push(result)
//     }
//     return hasilAkhir
// }

// console.log(sort([1, 2, 3, 4, 5, 6]));
// console.log(sort([11, 21, 22, 5, 30, 13]));

// /*
//     input = "helloWorld"
//     output = "hello World"
// */

// function split(n: string) {
//     return n.split(/(?=[A-Z])/)
// }
// console.log(split("HelloWorld"));

/*
    input = "Hello Purwadhika"
    output = [13, 2]

    input = "B4ndung"
    output = [5, 1]
*/

// function countarr(z: string) {
//   let hapus = z.replace(/[\s/0-9]/g, "");
//   const hasil: number[] = [0,0]

//   for (let i = 0; i < hapus.length; i++) {
//     if (hapus.charAt(i) === hapus.charAt(i).toLowerCase()) {
//         hasil[0]++
//     } else if (hapus.charAt(i) === hapus.charAt(i).toUpperCase()) {
//         hasil[1]++
//     }
// }
// return hasil
// }

// console.log(countarr("Hello Purwa dhika"));
// console.log(countarr("B4ndung"));


// //versi simple
// function myfunc(str: string) {
//     const letter = str.replace(/[\s/0-9]/g, "")
//     const lower = letter.replace(/[A-Z]/g, "")
//     return [lower.length, letter.length - lower.length]
// }
// console.log(myfunc("Hello Purwa dhika"))
// console.log(countarr("B4ndung"));


//rverse word
function reverseWords(s: string): string {
    let hapus = s.replace(/\s/, "")
    hapus += s.split(" ")[3] + ` ${s.split(" ")[1]}` + ` ${s.split(" ")[2]}` + ` ${s.split(" ")[0]}`
    return hapus

};
console.log(reverseWords("the sky is blue"));
