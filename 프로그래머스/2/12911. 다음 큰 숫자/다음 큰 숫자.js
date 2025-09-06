function count_ones(num){
    return num.toString(2).length - num.toString(2).replace(/1/g, "").length;
}

function solution(n) {
    let inital = count_ones(n)
    let next_num = n+1
    
    while(count_ones(next_num) !== inital){
        next_num ++
    }
    return next_num;
}

