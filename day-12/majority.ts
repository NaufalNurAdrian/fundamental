function majorityNum(n: number[]) {
    return n.map((val, idx, arr) => arr.filter((item) => item > val))[1] [0]
    
}
console.log(majorityNum([2, 2, 3]));