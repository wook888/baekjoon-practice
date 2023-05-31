const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(
    `${Number(input[0])} + ${Number(input[1])} = ${
      Number(input[0]) + Number(input[1])
    }`
  );
});

//덧셈식 출력하기 `${}`으로 변수나 표현식을 표현 가능!
