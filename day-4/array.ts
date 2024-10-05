//kasus1

//cara1
const arr = ["a", "b", "c"]

//cara lain
const arr2 = new Array("a", "b", "c")
const arr3: string[] = ["a", "b", "c"]
const arr4: number[] = [1, 2, 3]
const arr5: (number | string)[] = ["a", 2]
const arr6: any = []
const arr7: Array<string | number> = []

console.log(arr)
console.log(arr5[1])
console.log(arr.length)


// menambah/menghapus/mengganti value
arr.push("d")          //menambah di belakang
arr.unshift("e")       //menambah di depan
arr.pop()              //menghapus value terakhir
arr.shift()            //menhapus value pertama
arr.splice(1, 1)       //menghapus di tengah(depan sampai belakang bisa)
arr.splice(1, 0, "z")  //bisa menghapus dan/atau menambahkan

console.log(arr)


//kasus 2
const numArr: number[] = [1, 3, 2, 100, 21]

numArr.sort((a, b) => (a - b))   //memakai -> ((a, b) => (a - b)) agar lebih akurat mengurutkan
numArr.sort((a, b) => (b - a))   //sort besar -> kecil

arr.sort()             //sort alfabet dari kecil -> besar
arr.sort().reverse()   //sort alfabet dari besar -> kecil

console.log(numArr)




//kasus 3
const bilanganGanjil: number[] = numArr.filter((item) => item % 2 == 1)
const bilanganGenap: number[] = numArr.filter((item) => item % 2 == 0)

//sort besar ke kecil
const oddnumber: number[] = numArr
    .filter((item) => item % 2 == 1 && item > 2)
    .sort((a, b) => b - a)


console.log(bilanganGanjil)
console.log(bilanganGenap)
console.log(oddnumber)
console.log(oddnumber.find((item) => item == 3)) //mencari number
console.log(oddnumber.findIndex((item) => item == 3)) //mencari index
console.log(oddnumber.includes(3))  //identifikasi item ada atau tidak(true or false)


// string to array
const str: string = "Purwadhika Bandung"

console.log(str.split(" "))
console.log(str.split(" ").toString())
console.log(str.split(" ").join(" "))  //menambahkan
console.log(str.split("").reverse().join("")) //reverse


//array looping
const newarr: number[] = [10, 20, 30, 40, 50]
const newarr3: number[] = [] //membuat array baru

//cara1
// newarr.forEach((item, idx) => {
//     console.log(item, idx)
// })
//cara2
newarr.forEach((item) => {
    newarr3.push(item + 5)
})


//bisa return item baru
//cara1
newarr.map((item, idx) => {
    console.log(item, idx)
})
//cara2
const newarr2: number[] = newarr.map((item) => item += 5)
console.log(newarr2) //mengubah dan menambah array asli


//looping for off array
for (let item of newarr){
    console.log(item);
}



