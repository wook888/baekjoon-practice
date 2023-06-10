function solution(num_list) {
  if (num_list.length >= 11) {
    return num_list.reduce((a, b) => a + b, 0); // 덧셈의 초기값 0을 넣어줬음
  } else {
    return num_list.reduce((a, b) => a * b, 1); //곱셈의 초기값이기 때문에 1을 넣어줘야 함
  }
}
