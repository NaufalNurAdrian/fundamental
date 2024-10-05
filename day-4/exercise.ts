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


//exercise 1
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
