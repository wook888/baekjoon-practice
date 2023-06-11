function solution(sides) {
  let answer = sides.sort((a, b) => a - b); // 작은 수에서 큰 수로 정렬
 if(answer[0]+answer[1] > answer[2]){
     return 1
 }else{
     return 2
 }

}
