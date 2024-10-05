const str: string = " An apple a day keeps the doctor away"
const res: string = str.replace(/a/gi, "*")  //regular expresion

console.log(res)


const letter: string = "Hello@ Stu?dent Purwa4dhika"
console.log(letter.replace(/[^a-zA-Z\A\s]/g,""))
