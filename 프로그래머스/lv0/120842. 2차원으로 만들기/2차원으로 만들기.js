function solution(num_list, n) {
  const result = [];
  for (let i = 0; i < num_list.length; i += n) {
    const subArray = num_list.slice(i, i + n);
    result.push(subArray);
  }
  return result;
}