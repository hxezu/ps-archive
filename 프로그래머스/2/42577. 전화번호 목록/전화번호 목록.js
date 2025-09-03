function solution(phone_book) {
    const phoneSet = new Set(phone_book)
    
    for(let number of phoneSet){
        for(let i=1; i<number.length; i++){
            const prefix = number.slice(0,i)
            if(phoneSet.has(prefix))
                return false
        }
    }
    return true;
}