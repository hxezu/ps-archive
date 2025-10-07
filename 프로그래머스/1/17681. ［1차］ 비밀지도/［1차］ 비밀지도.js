function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i=0; i<n; i++){
        const line1 = arr1[i].toString(2).padStart(n, '0').split("")
        const line2 = arr2[i].toString(2).padStart(n, '0').split("")
        const row = []
        for(let j=0; j<n; j++){
            if(line1[j]==="1" || line2[j]==="1"){
                row.push("#")
            }else{
                row.push(" ")
            }
        }
        answer.push(row.join(""))
    }
    return answer;
}