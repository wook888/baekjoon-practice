function solution(array) {
  var maxValue = Math.max(...array); // 배열에서 가장 큰 값 구하기
  var maxIndex = array.indexOf(maxValue); // 가장 큰 값의 인덱스 구하기

  return [maxValue, maxIndex];
}
