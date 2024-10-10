//exercise 1
class Student{
    name = ""
    email = ""
    dob = ""
    score = 0
    constructor(nama:string , surel:string, tanggal:string, nilai:number){
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }
    getAge(){
        const birth : Date = new Date(this.dob)
        const now : Date = new Date()
        const diff = now.getTime() - birth.getTime()


        return Math.floor(diff/(246060*1000)/365)
    }
}

const student1 = new Student("Andi","andi@gmail.com","2002-01-01",80)
const student2 = new Student("Budi","budi@gmail.com","2000-01-01",85)
const student3 = new Student("Caca","caca@gmail.com","1998-01-01",90)

const arrStudent = [student1,student2,student3]


function calculate(arr:Student[]){
    const dataScore = arr.map((item) => item.score).sort((a,b)=>a-b)
    const dataAge = arr.map((item) => item.getAge()).sort((a,b)=> a-b)
    return {
        score:{
    lowest : dataScore[0],
    highest: dataScore[dataScore.length-1],
    average: dataScore.reduce((a,b)=>a+b)/dataScore.length,
        }, age: {
            lowest : dataAge[0],
            highest: dataAge[dataAge.length - 1],
            average : dataAge.reduce((a,b)=> a+b)/dataAge.length
        }
} 
}

console.log(calculate(arrStudent))



//exercise 2
class Product {
    productName = ""
    productPrice = 0

    constructor(Name: string, Price: number){
        this.productName = Name
        this.productPrice = Price
    }

}

class Transaction {
    TransactionTotal = 0
    TransactionProduk: {produk: Product, qty: number}[]


    constructor() {
        this.TransactionTotal = 0
        this.TransactionProduk = []
    }
}

let Cart: Transaction[] = []

function addToCart(item: Transaction):void{
    Cart.push(item)
} 

const obj = new Product("ice", 10000)
console.log(obj)
