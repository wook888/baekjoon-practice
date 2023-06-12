function solution(n) {
    var str = n.toString();
    var arr = str.split('');
    var sum = arr.reduce((prev, curr) => parseInt(prev) + parseInt(curr), 0);

    return sum;
}
