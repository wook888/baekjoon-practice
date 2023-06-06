function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let middleIndex = Math.floor(sortedArray.length / 2);

  return sortedArray[middleIndex];
}
//sort로 오름 차순 정렬
// Math.floor로 소숫점 아래를 반올림 한후 오름차순 정렬한 값을 2로 나눈값 ->
// ex let array = [5, 2, 9, 1, 7]; -> [1, 2, 5, 7, 9] -> array.lnegth = 4 / 2 ->
// 배열은 0부터 시작하므로 나눈값의 배열을 중앙에 위치한 값으로 볼수있음
