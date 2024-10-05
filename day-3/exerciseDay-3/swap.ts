let str: string = "The QuiCk BrOwn Fox"
let hasil : string ="";

for (let i = 0; i < str.length; i++){
    if (str.charAt(i) == str.charAt(i).toLowerCase()){
        hasil += str.charAt(i).toUpperCase()
    } else {
        hasil += str.charAt(i).toLowerCase()
    }

}

console.log(hasil)
