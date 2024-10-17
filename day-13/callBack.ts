//2 tipe pemanggilan berbeda(callback)
// function calculator(a:number, b: number) {
//     // return a + b
//     displayer(a +b)
// }

// function displayer (something: any) {
//     console.log(something);
    
// }
// const res = calculator(5, 10)

// // displayer(res)
// calculator(5, 10)









function calculator(a:number, b: number, callback: (x: any) => void) {
    callback(a + b)
}

function displayer (something: any) {
    console.log(something);
}

calculator(10, 5, displayer)