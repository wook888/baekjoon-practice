function solution(i, j, k) {
  let count = 0;
  
  for (let num = i; num <= j; num++) {
    const digits = num.toString().split("");
    for (const digit of digits) {
      if (parseInt(digit) === k) {
        count++;
      }
    }
  }

  return count;
}