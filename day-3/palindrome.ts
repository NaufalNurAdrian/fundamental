// const kata2: string = "madam";
// const strNum: string = kata2.toString();
// let left: number = 0;
// let right: number = strNum.length - 1;

// while (left <= right) {
//     if (strNum[left] !== strNum[right]) {
//         console.log(`${kata2} bukan palindrome`);
//         break;
//     }
//     left += 1;
//     right -= 1;
// }

// if (left > right) {
//     console.log(`${kata2} adalah palindrome`);
// }




//versi kang ilham
const strrr: string = "madam"
let strKebalik: string = ""

for (let i = strrr.length - 1; i >= 0; i--) {
    strKebalik += strrr.charAt(i)
}
console.log(strrr == strKebalik ? "palindrome" : "not palindrome")

//leetcode
function isPalindrome(input: number): boolean {
    const numTerbalik = input.toString()
    const reversenum = numTerbalik.split(` `).reverse().join()
    
    return numTerbalik == reversenum
}
const x = 121
const n = -121
const j = 10
console.log(isPalindrome(x))
console.log(isPalindrome(n))
console.log(isPalindrome(j))
