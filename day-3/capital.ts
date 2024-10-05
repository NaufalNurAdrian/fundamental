let str = "hello world";      // String yang akan dimodifikasi
const words = str.split(' ');    // Pisahkan string menjadi array kata berdasarkan spasi
let result = "";         // Variabel untuk menampung hasil akhir

for (let i = 0; i < words.length; i++) {
    
  // Ambil huruf pertama, kapitalisasi, lalu gabungkan dengan sisa kata
  result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  
  // Tambahkan spasi setelah setiap kata kecuali kata terakhir
  if (i < words.length - 1) {
    result += " ";
  }
}

console.log(result); // Output: "Hello World"\

//versi kang ilham
const  str3: string = "hello student purwadhika bandung"

let res2: string = ""

for (let i = 0; i < str3.length; i++){
    if (i == 1 || str3.charAt(i - 1) == " "){
        res += str3.charAt

    }

}