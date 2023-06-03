function solution(n, k) {
  let drink = k;
  let service = Math.floor(n / 10);

  return n * 12000 + (drink - service) * 2000;
}

// Math.floor을 이용한 풀이
// Math.floor() : 소수점 이하를 버림한다.
// Math.ceil() : 소수점 이하를 올림한다.
// Math.round() : 소수점 이하를 반올림한다.
