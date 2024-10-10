function intersection(obj1:Record<string,any>, obj2: Record<string,any>){
    const res: Record<string,any> = {}

    for (let key in obj2) {
        if (obj1.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            res[key] = obj1[key];
        }
    }

    return res;
}  

console.log(intersection({a: 1, b: 2 } , { a: 1, c: 3 }))




