const umur: number = 21

if (umur >= 17) {
    console.log("kamu bisa membuat id card")
} else {
    console.log("kamu tidak bisa melanjutkan membuat ic dard")
}


let nilai: string = "C"

if (nilai == "D"){              //jika nilai pakai huruf besar akan invalid
    console.log("anda lulus")
} else if (nilai == "B") {
    console.log("anda lulus dengan nilai B")
} else if (nilai == "C") {
    console.log("anda lulus dengan nilai C")
} else {
    console.log("invalid grade")
}


const tanggal: Date = new Date("2025-01-01")
const day: number = tanggal.getDay()



//switch case
switch (day) {
    case 0:
        console.log("minggu")
    break
    case 1:
        console.log("senin")
    break
    case 2:
        console.log("selasa")
    break
    case 2:
        console.log("rabu")
    break
    case 4:
        console.log("kamis")
    break
    case 5:
        console.log("jumat")
    break
    case 6:
        console.log("sabtu")
    break
    default:
        console.log("invalid day")

}

//ternary
// const z: number = 6
// const a: number = 3

// console.log(z < 10 || n > 5)


// const str: string = "Typescript"


//cara 1
// if (str == "Typescript"){
//     console.log("Typescript")
// } else {
//     console.log("not Typescript")
// }

// // cara mudah
// console.log(str == "Typescript" ? "Typescript" : "Not Typescript")


//the && operator
const value: string = "asd"

const result: string = value && "purwadhika"
const result2: string = value || "purwadhika"

console.log(result) //output: ""
console.log(result2) //output: "purwadhika"


//loop statement
