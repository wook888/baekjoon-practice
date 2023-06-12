function solution(my_string) {
    var arr = my_string.split('');
    console.log(arr)
    var answer = arr.reverse().join("")
    return answer;
}