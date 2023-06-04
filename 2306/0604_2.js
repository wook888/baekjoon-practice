function solution(array, n) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == n) {
      sum++;
    }
  }
  return sum;
}

//배열중 n값이 중복되는 개수 구하기
// sum++ = sum += 1 =  sum = sum + 1 과 같음
// 배열을 돌면서 배열중 n값이 나온다면 갯수를 +1씩 해서 n값의 중복 개수를 계산 함
