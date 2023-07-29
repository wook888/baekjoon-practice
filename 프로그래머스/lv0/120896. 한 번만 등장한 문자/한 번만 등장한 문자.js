function solution(s) {
  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  const uniqueChars = [];

  for (const char in charCount) {
    if (charCount[char] === 1) {
      uniqueChars.push(char);
    }
  }

  uniqueChars.sort();

  return uniqueChars.join('');
}