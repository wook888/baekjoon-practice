function solution(num, k) {
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (parseInt(numStr[i]) === k) {
      return i + 1; 
    }
  }
  return -1; 
}
