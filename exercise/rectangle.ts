// peresegi
const rectangleLenght: number = 5
const rectanglewidth: number = 3

const rectangleArea: number = rectangleLenght * rectanglewidth
const rectanglePerimeter: number = (rectangleLenght + rectanglewidth) * 2

console.log(`luas persegi = ${rectangleArea}`)
console.log(`keliling persegi = ${rectanglePerimeter}`)

// lingkaran

const radius: number = 5

const radiusdiameter: number = radius * 2
const circumuference: number = radiusdiameter * 3.14159
const areacircle: number = radius ** 2 * 3.14158

console.log(`diameter lingkaran = ${radiusdiameter}`)
console.log(`luas lingkaran = ${circumuference}`)
console.log(`keliling = ${areacircle}`)


// segitga
const a: number = 80
const b: number = 65

const angles: number = 180 - a - b

console.log(`sudut segitiga = ${angles}`)


//konversi
const convert: number = 400
const convert2: number = 366

const year : number = Math.floor(convert / 365)
const month : number = Math.floor(convert % 365 / 30)  //400 hari di kurangi 1 tahun(365) sisa 35 hari di bagi 1bulan
const days : number = Math.floor(convert % 365 % 30)

const year2 : number = Math.floor(convert2 / 365)
const month2 : number = Math.floor(convert2 % 365 / 30)  //400 hari di kurangi 1 tahun(365) sisa 35 hari di bagi 1bulan
const days2 : number = Math.floor(convert2 % 365 % 30)


console.log(`${year}tahun, ${month}bulan, ${days}hari `)
console.log(`${year2}tahun, ${month2}bulan, ${days2}hari `)




// 2
// const hitungSelisihTanggal = (tanggal1: string, tanggal2: string): number => {
//     const tanggalAwal = new Date(tanggal1);
//     const tanggalAkhir = new Date(tanggal2);

//     // Menghitung selisih waktu dalam milidetik
//     const selisihWaktu = tanggalAkhir.getTime() - tanggalAwal.getTime();

//     // Mengkonversi milidetik ke hari
//     const selisihHari = selisihWaktu / (1000 * 3600 * 24);

//     // Mengembalikan nilai absolut untuk memastikan hasil positif
//     return Math.abs(selisihHari);
// };

// // hasil:
// const tanggal1 = "2022-01-20";
// const tanggal2 = "2022-01-22";
// const selisih = hitungSelisihTanggal(tanggal1, tanggal2);
// console.log(selisih);  





//konveri 2
const tanggal1: Date = new Date("2022-01-20")
const tanggal2: Date = new Date("2022-01-22")

//mengubah ke milidetik
const selisihwaktu = tanggal2.getTime() - tanggal1.getTime()

//mengubah ke hari
const selisihHari = selisihwaktu / (1000 * 3600 * 24)

console.log(selisihHari)



