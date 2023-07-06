function solution(my_string) {
  let uniqueChars = '';
  let charSet = new Set();

  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    if (!charSet.has(char)) {
      uniqueChars += char;
      charSet.add(char);
    }
  }

  return uniqueChars;
}