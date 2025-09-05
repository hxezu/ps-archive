function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let queue = Array(bridge_length).fill(0)
    let sum = 0;
    
    while(truck_weights.length > 0 || sum > 0){
        time ++
        
        let out = queue.shift()
        sum -= out
        
        if(truck_weights.length>0 && sum + truck_weights[0] <= weight){
            let truck = truck_weights.shift()
            queue.push(truck)
            sum += truck
        }else{
            queue.push(0)
        }
    }
    
    return time;
}