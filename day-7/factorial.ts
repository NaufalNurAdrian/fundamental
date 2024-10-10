//nomor 5
function factorial(input: number):number{
    if (input === 0){
        return 1
    }
    return input * factorial(input - 1)
}
console.log(factorial(5))



const factorial2 = (n: number): number => n == 0 ? 1 : n * factorial2(n - 1)
console.log(factorial2(5))