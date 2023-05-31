const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log("!@#$%^&*(\\'\"<>?:;");
});

// \를 출력하려는 경우 앞에 \\를 붙여줘야 출력이 가능함.
// 자바의 이스케이프 시퀀스. 자바에서는 백슬래시가 등장하는 순간 다음 문자를 인식해 상황에 맞게 처리를 하려고하는 것

// \ :에러 \(:에러 \/ : 에러
