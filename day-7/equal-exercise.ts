function equal(aObject: object, bObject: Object){
    
    if (JSON.stringify(aObject) == JSON.stringify(bObject)){
        return true
    } else {
        return false
    }
} 

console.log(equal({a: 2} , {a: 1}))
console.log(equal({a: "Hello"} , {a: 1}))
console.log(equal({a: 1} , {a: 1}))



// //versi kang ilham
// interface input{
//     [key: string]: any
// }

// const obj1: input = {a: 1, b: 2}
// const obj2: input = {a: 1, b: "2"}

// function isEqual(obj1:, obj2: input) {
//     if(isEqual)
// }