function solution(arr1, arr2) {
    var answer = [[]];
    return arr1.map((row, idx)=>
        row.map((val,i)=> val+arr2[idx][i])
    );
}