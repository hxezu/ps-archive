function solution(a, b) {
    const daysOfMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30,31];
    const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
    let totalDays = 0
    
    for(let i=1; i<a; i++){
        totalDays += daysOfMonth[i]
    }
    
    totalDays += b - 1;
    
    return day[totalDays%7];
}