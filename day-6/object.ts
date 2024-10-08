// interface Icar {
//     brand: string
//     model: string
//     price: number
// }

type Car ={          //ada 2 cara
    brand: string
    model: string
    price: number
}

const car: Car = {
    brand: "BMW",
    model: "M135i xDrive",
    price: 800000000
}







interface Iuser{
    name: string
    hobby? : string
    adress?: {
        street: string
        country: string
    }
    greeting(input: string): void   //tidak me-return
}

const user: Iuser = {
    name: "David",
    greeting(input: string){
        console.log("Hello" + input)
    }
}
// console.log(user.name) //cara satu "'" (dot)
// console.log(user['name']) //cara dua (bracket)
// user.greeting("World")

user.hobby = "ngoding"
console.log(user)      //{ name: 'David', greeting: [Function: greeting], hobby: 'ngoding' }

delete user.hobby
console.log(user)     //{ name: 'David', greeting: [Function: greeting] }

user.adress = {
    street: "Braga",
    country: "Indonesia"
}

//optional chaining
console.log(user.adress?.street) //braga
console.log(user.adress)         //{ street: 'Braga', country: 'Indonesia' }


console.log(Object.keys(user))   //[ 'name', 'greeting', 'adress' ]