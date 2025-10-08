function solution(cacheSize, cities) {
    if (cacheSize ===0) return cities.length*5
    let cache = []
    let excutionTime = 0
    
    cities.forEach((city)=>{
        city = city.toLowerCase();
        
        if(cache.includes(city)){
            excutionTime++;
            cache = cache.filter(v=>v!==city)
            cache.push(city)    
        }else{
            excutionTime+=5   
            if(cache.length>=cacheSize) cache.shift()
            cache.push(city)    
        }
         
    })
    return excutionTime;
}