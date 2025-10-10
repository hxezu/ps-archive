function solution(str1, str2) {
    function makeBigrams(s){
        s = s.toLowerCase()
        const arr = []
        for(let i=0; i<s.length-1; i++){
            const sub = s[i]+s[i+1]
            if(/^[a-z]{2}$/.test(sub)) arr.push(sub)
        }
        return arr
    }
    
    const arr1 = makeBigrams(str1)
    const arr2 = makeBigrams(str2)
    
    const tempArr2 = [...arr2]
    let intersection = 0;
    for(const x of arr1){
        const idx = tempArr2.indexOf(x)
        if(idx!==-1){
            intersection ++
            tempArr2.splice(idx,1)
        }
    }
    

    const union = arr1.length + arr2.length - intersection
    
    return Math.floor((union===0? 1 : intersection/union)*65536);
}