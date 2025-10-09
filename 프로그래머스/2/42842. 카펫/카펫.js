function solution(brown, yellow) {
    const A = -2;
    const B = brown + 4;
    const C = -2*brown + -2*yellow
    const discriminant = B**2 - 4*A*C
    
    const row = (-B- Math.sqrt(discriminant))/(2*A)
    const col = (-B+ Math.sqrt(discriminant))/(2*A)
    
    return [row,col]
}