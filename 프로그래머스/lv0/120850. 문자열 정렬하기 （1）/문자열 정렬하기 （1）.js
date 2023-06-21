function solution(myString) {
  const numbers = [];
  for (let i = 0; i < myString.length; i++) {
    const char = myString.charAt(i);
    if (!isNaN(parseInt(char))) {
      numbers.push(parseInt(char));
    }
  }
  numbers.sort();
  return numbers;
}