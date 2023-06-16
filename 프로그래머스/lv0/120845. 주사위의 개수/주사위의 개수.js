function solution(box, n) {
  var minLength = Math.min(...box); //배열 중 가장 작은 값

  return Math.floor(minLength / n) ** 3;
}


