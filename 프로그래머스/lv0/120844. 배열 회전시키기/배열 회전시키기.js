function solution(numbers, direction) {
  var answer = [];
  if (direction === "right") {
    const lastItem = numbers.pop();
    numbers.unshift(lastItem);
    answer = numbers;
  } else if (direction === "left") {
    const firstItem = numbers.shift();
    numbers.push(firstItem);
    answer = numbers;
  }
  return answer;
}