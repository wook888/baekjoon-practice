function solution(emergency) {
    const sortedEmergency = emergency.slice().sort((a, b) => b - a);
    
    const result = emergency.map(value => sortedEmergency.indexOf(value) + 1);
    
    return result;
}