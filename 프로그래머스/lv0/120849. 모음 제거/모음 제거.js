function solution(my_string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var filteredString = my_string.split('').filter(function(char) {
    return vowels.indexOf(char.toLowerCase()) === -1;
  });
  var answer = filteredString.join('');
  return answer;
}
