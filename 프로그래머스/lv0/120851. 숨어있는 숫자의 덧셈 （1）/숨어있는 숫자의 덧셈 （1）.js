function solution(my_string) {
   var numbers = my_string.split('').filter(char => !isNaN(parseInt(char)));
   var sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
   return sum;
}
