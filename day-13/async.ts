// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// const tryPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) {
//       resolve("Task 2 completed");
//     } else {
//       reject("Task 2 failed");
//     }
//   }, 3000);
// });

// const myfunct = async () => {
//   console.log(`task 1`);

//   await tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
//   // .finally(() => console.log(`finaly task 2 done`))

//   console.log(`task 3`);
// };
// // myfunct();


// const trycatch = async () => {
//     try {
//         console.log(`task 1`);
//         const res = await tryPromise
//         console.log(res);
//         console.log(`task 3`);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// trycatch()




const getData = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if (!response.ok) throw `failed to fetch`
        const user = await response.json()
        console.log(user);
        
    } catch (err) {
        console.log(err);
        
    }
}
getData()
