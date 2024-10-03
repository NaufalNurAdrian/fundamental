const data: number = 400

const sisa1: number = data % 365
const sisa2: number = sisa1 % 30 

const tahun: number = (data - sisa1) / 365
const bulan: number = (sisa1 - sisa2) / 30
const hari: number = sisa2

const hasil: string = `${tahun} year, ${bulan} month, ${hari} days`

console.log(hasil)