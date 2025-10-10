function solution(routes) {
    routes.sort((a,b)=> a[1]-b[1])
    let cameraCount = 0
    let lastCamera = -30001
    
    for(const [start, end] of routes){
        if(start > lastCamera){
            cameraCount++
            lastCamera = end
        }
    }
    return cameraCount;
}