function solution(price) {
  if (price >= 500000) {
    price *= 0.8;
  } else if (price >= 300000) {
    price *= 0.9;
  } else if (price >= 100000) {
    price *= 0.95;
  }
  return Math.floor(price);
}

//math.floor로 최종 가격을 정수로 내림하여 반환!!
