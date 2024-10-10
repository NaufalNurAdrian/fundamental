const arr = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(arr == arr2)  //tidak bisa di bandingkan ==

//kecuali
const arr3 = [1]
const arr4 = arr3

console.log(arr3 == arr4)





const target = {a: 1, b: 2}
const source = {b: 4, c: 5}
const final = Object.assign(target, source)

console.log(final)



const n = [1, 2, 3]
n[2] = 10         //meng-edit indeks n ke-2 => 10
n[4] = 5          //muncul tapi undefined/empty

console.log(n[2]) //memanggil indeks ke-2
console.log(n)    //memanggil n keseluruhan

