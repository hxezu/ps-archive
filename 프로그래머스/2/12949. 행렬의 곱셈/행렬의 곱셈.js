function solution(arr1, arr2) {
    const m = arr1.length
    const n = arr1[0].length
    const p = arr2[0].length
    
    const matrix = Array.from({length:m}, ()=>Array(p).fill(0))
    
    for(let i=0; i< m; i++){
        for(let j=0; j<p; j++){
            for(let k=0; k< n ;k++){
                matrix[i][j] += arr1[i][k]*arr2[k][j]
            }
        }
    }
    return matrix;
}