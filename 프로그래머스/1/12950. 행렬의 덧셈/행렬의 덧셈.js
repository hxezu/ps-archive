function solution(arr1, arr2) {
    return arr1.map((row, idx)=>
        row.map((val,i)=> val+arr2[idx][i])
    );
}