const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
  console.log(input[0].repeat(input[1]));
});

// 문자열.repeat(n) 문자열을 n번 만큼 반복해서 출력
// string 5가 입력 됐을 시 -> string 을 5번 반복하여 출력
