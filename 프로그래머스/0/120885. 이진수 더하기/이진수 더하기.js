function solution(bin1, bin2) {
    let i = bin1.length - 1;
    let j = bin2.length - 1;
    let carry = 0;
    let answer = "";

    while (i >= 0 || j >= 0 || carry) {
        const bit1 = i >= 0 ? Number(bin1[i]) : 0;
        const bit2 = j >= 0 ? Number(bin2[j]) : 0;

        const sum = bit1 + bit2 + carry;  
        
        answer = (sum % 2) + answer;     
        carry = Math.floor(sum / 2); 

        i--;
        j--;
    }

    return answer;
}
