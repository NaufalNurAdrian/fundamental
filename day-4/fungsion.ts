//function declaration
function reverseStr (input: string) {
    return input.split("").reverse().join(""); 
}

console.log(reverseStr("Hello World"))
console.log(reverseStr("madam"))
console.log(reverseStr("Bandung"))



//fungsion expretion
const sum = function (a: number, b: number){
    return a + b
}

console.log(sum(10, 5))




//nested function
function getMasage (firstname: string){
    function sayhello () {
        return "hello " + firstname
    }

    function welcomemasage () {
        return " welcome to purwadhika"
    }

    return sayhello() + "," + welcomemasage()
}

console.log(getMasage("David"))


//closure function
function greeting (name: string){
    const defaultmsg: string = "hello "
    return function () {
        return defaultmsg + name
    }
}

const greetingdavid = greeting("david")
console.log(greetingdavid())

//cara console.log cepat (tanpa variabel const)
console.log(greeting("David")())


//loop di dalam function
function capital (str: string){
    let res: string = ""
    for (let i = 0; i < str.length; i++){
        if ( i == 0 || str.charAt(i - 1) == " "){
            res += str.charAt(i).toUpperCase()
        } else {
            res += str.charAt(i).toLowerCase()
        }
    }
    return res
}

console.log(capital("hello world"))
console.log(capital("purwadhika bandung"))
console.log(capital("david di sini"))

function checkOdd (num: number) {
    if (num % 2 == 0) {
            return "even"
        } else {
            return "odd"
        }
        {
    }

}

//currying
function multiplayer (factor: number){
    return function (num: number){
        return factor * num
    }
}

const mul3 = (multiplayer(3))
const mul5 = (multiplayer(5))

console.log(mul3(3))
console.log(mul5(5))

console.log(multiplayer(10)(2)) //bisa di satukan


//recursive
function countdown (fromnumber: number){
    console.log(fromnumber)

    let nextnumber: number = fromnumber - 1

    if (nextnumber > 0) {
        countdown(nextnumber)
    }
}

countdown(10)

// arrow function (simple)
const square = (a: number, b: number) => a * b
console.log(square(4, 2))

//check
console.log(parseFloat("10.15"))
console.log(parseInt("123", 8))  //oktal = 1 * 8^2 + 2 * 8^1 + 3 * 8^0 
                       //      =    64   +    16    +    3   = 83


