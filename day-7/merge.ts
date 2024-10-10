// interface merge {
//     name: string
//     email: string
// }

// function mergearr(name: merge[], email: merge[]){
//     const resarr: merge[] = []
//     for (let name = 0; name < arr1.length; name++) {
//         const element = arr1[name];
        
//     } return resarr
    

//     return name.map((item, index) => ({...item, email: email[index]}))
// }

// const arr1: merge[] = [{ name: "Student 1", email : "Student1@mail.com" }, { name: "Student2", email : "student2@mail.com" }]
// const arr2: merge[] = [{ name: "Student 1", email : "Student1@mail.com" }, { name: "Student3", email : "student3@mail.com" }]







// let arr:merge[]
/*arr1
[
{name:'naufal ganteng', email:'naufa@mail.com'},
{name:'salman ganteng', email:'salman@mail.com'}
]
*/
/*arr2
[
{name:'ganteng', email:'gans@mail.com'},
{name:'salman ganteng', email:'salman@mail.com'}
]
*/









//

interface Student {
    name: string
    email: string
}
const arr1: Student[] = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 2", email : "student2@mail.com" }

]
const arr2: Student[] = [
    { name: "Student 1", email : "student1@mail.com" },
    { name: "Student 3", email : "student3@mail.com" }

]

function mergeArr (arr1: Student[], arr2: Student[]){
    const result: Student[] = arr1

    for (let item of arr2){
        const idx = result.findIndex((val) => val.name && val.email == item.email)
        if (idx == -1) result.push(item)
    }

    return result
}

console.log(mergeArr(arr1, arr2))