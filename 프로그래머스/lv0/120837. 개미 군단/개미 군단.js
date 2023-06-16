function solution(hp) {
   let a = 5
   let b = 3
   let c = 1
   let countA = Math.floor(hp / a) 
   let countB = Math.floor((hp - (a * countA)) / b) 
   let countC = hp - (a * countA) - (b * countB) 
   
   return countA + countB + countC
}
