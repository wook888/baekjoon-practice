function solution(my_string, letter) {
   const regex = new RegExp(letter, 'g');
   const str = my_string.replace(regex, '');
   return str;
}