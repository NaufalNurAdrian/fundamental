// let name: string = "andi"

// let newName: string = name

// name = "Budi"
// console.log(newName) // Output: Andi
// console.log(name)    // output: budi












// const arr: number[] = [1, 2, 3]
// const newArr: number[] = arr

// arr.push(4)
// newArr.push(5)   //jika salah satu di ubah makan yang lain juga

// console.log(arr)        //[ 1, 2, 3, 4, 6 ]
// console.log(newArr)     //[ 1, 2, 3, 4, 6 ]



// const arr: number[] = [1, 2, 3]
// const newArr: number[] = [...arr]   //jika menambahkan [...arr] maka nilai tetap

// arr.push(4)   

// console.log(arr)     //[ 1, 2, 3, 4 ]
// console.log(newArr)  //[ 1, 2, 3]



// const person = {
//     name: "andi",
//     age: 25
// }

// const newPerson = person

// newPerson.name ="Budi"

// console.log(person)
// console.log(newPerson)











const person = {
    name: "andi",
    age: 25
}

// const newPerson = {...person, hobby: "coding"}

// newPerson.name ="Budi"

// console.log(person)
// console.log(newPerson)



//looping object
for(let key in person) {
    console.log(key)
    console.log(person[key as keyof typeof person])
}
