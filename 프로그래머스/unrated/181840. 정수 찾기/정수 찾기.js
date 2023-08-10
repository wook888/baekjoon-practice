function solution(num_list, n) {
    for (var i = 0; i <= num_list.length; i++) {
        if (num_list[i] === n) {
            return 1; 
        }
    }
    return 0; 
}