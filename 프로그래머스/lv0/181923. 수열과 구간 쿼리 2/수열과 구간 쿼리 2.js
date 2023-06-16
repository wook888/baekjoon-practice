function solution(arr, queries) {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    const subArr = arr.slice(s, e + 1);
    let minValue = Infinity;
    for (let j = 0; j < subArr.length; j++) {
      if (subArr[j] > k && subArr[j] < minValue) {
        minValue = subArr[j];
      }
    }
    if (minValue === Infinity) {
      result.push(-1);
    } else {
      result.push(minValue);
    }
  }
  return result;
}
