function romanToInt(s: string): number {
    let resrult: object = {}
    let res: string[] = []
    res = s.split("")
    console.log(res);
    

    const roman: {[key: string]: number} = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
        
    }
    for (const key in roman) {
        
            
        console.log(key);
        
    }

    return 1
}

console.log(romanToInt("XCMV"))


