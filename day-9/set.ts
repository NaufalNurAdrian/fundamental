const fruit: string[] = ["Banana", "apple", "jackfruit", "apple"]

const newFruit = new Set(fruit)

newFruit.add("melon")
newFruit.delete("jackfruit")
// newFruit.clear()

console.log(newFruit);

newFruit.forEach((item) => {   //mengeluarkan dari object
    console.log(item);
})



//contoh2
const newNUM = new Set([1, 2, 3, 4, 5])
console.log(newNUM);
