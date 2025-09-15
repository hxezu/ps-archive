function solution(sizes) {
    const x=[];
    const y =[]
    
    sizes.map((arr)=> {
        arr.sort((a,b)=> a-b)
        x.push(arr[0])
        y.push(arr[1])
    })
    
    return Math.max(...x)*Math.max(...y);
}