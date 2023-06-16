function solution(n, numlist) {
  var Arr = numlist.filter((num) => num % n == 0); //배열 안의 n의 배수 찾기
  return Arr;
}
