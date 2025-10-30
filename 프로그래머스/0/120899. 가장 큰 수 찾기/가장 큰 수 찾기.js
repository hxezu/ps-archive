function solution(array) {
    const newArr = [...array]
    array.sort((a,b)=>b-a);
    return [array[0],newArr.indexOf(array[0])];
}