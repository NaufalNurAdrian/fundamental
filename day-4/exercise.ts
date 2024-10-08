//contoh(triangle)
function segitiga (heigth: number) {
    for (let i = 1; i <= heigth; i++){     //untuk looping ke bawah
        let res: string = ""
        for (let j = 1; j <= i; j++){      //untuk looping ke samping
            res += `${j} `
        }
        console.log(res)
    }
}
segitiga(5)


//exercise contoh
function segitiga2 (heigth: number): void {
    let nomorRes = 1;
    for (let i = 1; i <= heigth; i++){     //untuk looping ke bawah
        let res = ``;
        for (let j = 0; j < i; j++){      //untuk looping ke samping
            res += nomorRes.toString().padStart(2, `0`) + ` `;
            nomorRes++
        }
        console.log(res.trim());
    }
}

//exerise 1
function segitigaUrut(tinggi: number) {
    let nomorRes = 1;
    for (let n = 1; n <= tinggi; n++) {
        let numres: string[] = [];
        for (let j = 1; j <= n; j++) {
            numres.push(nomorRes.toString().padStart(2, '0'));
            nomorRes++;
        }
        console.log(numres.join(" "));
    }
}
segitigaUrut(4)

//exercise 2
function fizzBuzz(n: number) {
    let hasil: (string | number)[] = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            hasil.push("FizzBuzz");
        } else if (i % 3 == 0) {
            hasil.push("Fizz");
        } else if (i % 5 == 0) {
            hasil.push("Buzz");
        } else {
            hasil.push(i);
        }
    }
    
    return console.log(hasil.join(", "));
}

// Contoh penggunaan
fizzBuzz(6);  // Output: 1, 2, Fizz, 4, Buzz, Fizz
fizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz


//exercise 3
function bmi(berat: number, tinggi: number){
    const bmi: number = berat / tinggi ** 2
    if (bmi < 18.5){
        return "less wight"
    } else if (18.5 <= 24.9){
        return "ideal"
    } else if (25.0 <= 29.9){
        return "overweight"
    } else if (30.0 <= 39.9){
        return "very overweight"
    } else if (bmi > 39.9){
        return "obesity"
    }
}

const berat = 46     // kg
const tinggi = 1.5 // satuan meter

console.log(bmi(berat, tinggi))


//versi kang ilham
function calculatebmi(weight: number, heigth: number){
    const bmi: number = weight / ((heigth/100) ** 2)
    if (bmi < 18.5){
        return "less wight"
    } else if (18.5 <= 24.9){
        return "ideal"
    } else if (25.0 <= 29.9){
        return "overweight"
    } else if (30.0 <= 39.9){
        return "very overweight"
    } else if (bmi > 39.9){
        return "obesity"
    }
}
console.log(calculatebmi(70, 170))


//exercise 4
function hapusOdd (nomor: number[]){
    return nomor.filter((item) => item % 2 == 0)
}
console.log(hapusOdd([1,2,3,4,5,6,7,8,9,10]))

//exercise 4
function split (str: string){
    return str.split(" ")
}
console.log(split("Hello World"))
