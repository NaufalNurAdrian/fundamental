const uang: number = 10000000

// angka yang akan diformat
let strJumlah = uang.toString();
let hasil = "";

// Loop dari belakang ke depan dan tambahkan titik setiap 3 angka
for (let i = strJumlah.length - 1, j = 1; i >= 0; i--, j++) {
  hasil = strJumlah[i] + hasil;
  if (j % 3 === 0 && i !== 0) {
    hasil = "." + hasil;
  }
}
console.log(`Rp. ${hasil},00`)







//versi kang ilham
const num9: number = 1000

console.log(num9.toLocaleString("id-ID", {style: `currency`, currency: `IDR`}))

//2
const num10: number = 1000000000
const numStrrr: string = num10.toString()
let count : number = 0
let res: string = ""

for (let i = numStrrr.length - 1; i >= 0; i--){
    if (count % 3 == 0 && count > 0){
        res = "." + res
    }
    
    res = numStrrr.charAt(i) + res
    count++

}

console.log(`Rp ${res},00`)
