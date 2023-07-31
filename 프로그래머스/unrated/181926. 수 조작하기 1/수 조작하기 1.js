function solution(n, control) {
  for (let i = 0; i < control.length; i++) {
    const command = control[i];
    switch (command) {
      case "w":
        n += 1;
        break;
      case "s":
        n -= 1;
        break;
      case "d":
        n += 10;
        break;
      case "a":
        n -= 10;
        break;
      default:
        break;
    }
  }
  return n;
}