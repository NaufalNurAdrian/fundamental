function pigLatin(str: string): string {
    // Pisahkan kalimat menjadi array kata-kata
    const words = str.split(" ");
    
    // Proses setiap kata
    const pigLatinWords = words.map(word => {
        // Pindahkan huruf pertama ke belakang dan gabungkan kembali
        return word.slice(1) + word[0] + "ay";
    });
    
    // Gabungkan kata-kata yang sudah diubah menjadi kalimat baru
    return pigLatinWords.join(" ");
}

console.log(pigLatin("Pig latin is cool")); // Output: "igP atinl si oolc"
console.log(pigLatin("Hello World"))


//versi kang ilham
function myFunc(input: string){
    return input.split(` `).map((item) => item.slice(1) + item.charAt(0) + "ay").join(" ")
}
console.log(myFunc("Pig latin is cool"))




