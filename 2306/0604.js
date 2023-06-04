function solution(numbers) {
  const reducer = (a, b) => a + b;
  var answer = numbers.reduce(reducer) / numbers.length;
  return answer;
}

//배열의 평균 값 구하기.
//const reducer = (a, b) => a + b;: 배열 요소들을 더하는 콜백 함수
// 배열의 합을 구한 후(reduce) 배열의 길이 numbers.length로 나누어준다.
