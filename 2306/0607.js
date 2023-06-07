function solution(num_list) {
  var answer = [0, 0]; //초기 값 0으로 설정

  for (var i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      answer[0]++; //짝수개수 증가
    } else {
      answer[1]++; //홀수개수 증가
    }
  }

  return answer;
}
