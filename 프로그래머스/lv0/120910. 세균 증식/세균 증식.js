function solution(n, t) {
var count = n;
for (var i = 1; i <= t; i++) {
count *= 2;
}
return count;
}

