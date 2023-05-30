const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const str = input[0];
  const output = [];

  for (let i = 0; i < str.length; i++) {
    //각 문자를 순회하면서 확인
    if (str[i] === str[i].toUpperCase()) {
      //해당글자가 대문자면
      output.push(str[i].toLowerCase()); //소문자로 바꿔서 넣고
    } else {
      //대문자가 아니고 소문자라면
      output.push(str[i].toUpperCase()); //대문자로 바꿔서 넣기
    }
  }

  console.log(output.join("")); //배열을 문자열로 만들어주기
});
