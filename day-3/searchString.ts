let cari = "Hello world"; // string asli
let cariString = "ell"; // substring yang ingin dihapus

let index = cari.indexOf(cariString); // temukan indeks kemunculan pertama
if (index !== -1) {
  cari = cari.slice(0, index) + cari.slice(index + cariString.length);
}

console.log(cari); // Output: "Ho world"



//versi kang ilham
const stringg: string = "Hello world"
const cariString2: string = "ell"
const ress: string = stringg.replace(cariString2, "")

console.log(ress)