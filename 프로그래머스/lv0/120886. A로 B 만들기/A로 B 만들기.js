function solution(before, after) {
  if (before.length !== after.length) {
    return 0
  }

  const beforeArr = before.split('').sort().join('');
  const afterArr = after.split('').sort().join('');

  if (beforeArr === afterArr) {
    return 1
  } else {
    return 0
  }
}

