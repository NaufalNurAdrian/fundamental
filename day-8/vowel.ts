function vowel(input:string) {
    
    let vokal = input.split('').filter(item => "aiueo".includes(item))
    // console.log(vokal);

    let includes = vokal.length
    console.log(includes);
    
}
vowel("Bandung")


//versi kang ilham
function countvowel(str:string) {
    const vowel = ["a", "i", "u", "e", "o"]
    let res: number = 0

    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str.charAt(i))) {
            res++
        }
        
    }
    return res
}
console.log(countvowel("Purwadhika"))