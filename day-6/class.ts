// class user {
//     firstName = ""
//     lastName = ""

//     constructor (first: string, last: string = "") {   //( = "" ) untuk opsi opsional
//         this.firstName = first
//         this.lastName = last
//     }
//     greet() {
//         console.log(`Hello ${this.firstName}`)
//     }
// }

// const user1 = new user("Frengky", "Sihombing")
// const user2 = new user("Jhon", "Doe")
// const user3 = new user("Jane", "Dine")

// console.log(user1.firstName)  //spesific firsname only
// console.log(user2)
// console.log(user3)

// user1.greet()
// user2.greet()
// user3.greet()













//privat
class User {
    firstName = ""
    #lastName = ""   //privat #
    static word = "Hello world"

    constructor (first: string, last: string = "") {   //( = "" ) untuk opsi opsional
        this.firstName = first
        this.#lastName = last
    }
    greet() {
        console.log(`Hello ${this.firstName}`)
    }
    getlastName(){
        return this.#lastName
    }
}

const user1 = new User("Frengky", "Sihombing")
const user2 = new User("Jhon", "Doe")
const user3 = new User("Jane", "Dine")

console.log(user1)  //spesific firsname only
console.log(user2.getlastName())
console.log(user3.getlastName())

console.log(User.word)
