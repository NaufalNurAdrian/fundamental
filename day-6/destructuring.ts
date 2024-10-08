// const person = {
//     name: "David",
//     age: 25,
//     hobby: "Coding"
// }

// //object destructuring
// const{name, age, hobby} = person

// console.log(name)
// console.log(age)
// console.log(hobby)
// console.log(name, age, hobby)





// const arr = [1, 2, 3]
// let [a, b, c] = arr

// console.log(a)
// console.log(b)
// console.log(c)  //harus sesuai index karea [a, b, c] = [1, 2, 3]
                //                          0  1  2     0  1  2





//spread operator
const objectOne = {
    name: "Andi"
}

const objectTwo = {
    email: "David@Gmail.com"
}
const finalObject = {...objectOne, ...objectTwo}
console.log(finalObject)




const user = {
    firsName: "Franky",
    lastNamae: "Sihombing",
    greet() {
        console.log(`Hello ${this.firsName}`)
    }
}
user.greet()

console.log(Object.entries(user))
Object.freeze(user)

console.log(user.hasOwnProperty("firsName")) //mengecek apakah "firsname" ada di dalam property(user)
console.log(Object.isFrozen(user))           //mengecek apakah property(user) di freeze
console.log(Object.values(user))

// user.firsName = "Andi"
// console.log(user)



