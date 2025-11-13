function solution(array, n) {
  array.sort((a, b) => a - b);
  
  return array.reduce((prev, curr) => {
    const prevDiff = Math.abs(prev - n);
    const currDiff = Math.abs(curr - n);
    
    if (currDiff < prevDiff) return curr;
    if (currDiff === prevDiff) return Math.min(prev, curr);
    return prev;
  });
}