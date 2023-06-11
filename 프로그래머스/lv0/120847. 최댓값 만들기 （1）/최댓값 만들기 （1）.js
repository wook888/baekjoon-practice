function solution(numbers) {
  numbers.sort((a, b) => b - a); // 내림차순 정렬
  return numbers[1] * numbers[0] 
}
