const phone: number = 123456789
const numto: string = phone.toString()

let res: string = ''
let res2: string = ''
let res3: string = ''

for (let i = 0; i < numto.length; i++) {
    if (i <= 2 ){
        res += numto[i]
    }else if(i > 2 && i < 6){
        res2 += numto[i]
    }else if(i >= 6){
        res3 += numto[i]
    }
}
let result: string = (`(${res})` + `-${res2}-` + res3)

console.log(result);




// console.log(`(${res})`);
// console.log(`-${res2}-`);
// console.log(`-${res3}`);




