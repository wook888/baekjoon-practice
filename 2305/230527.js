let A = " ";
let B = " ";

function comparison(A, B) {
  if (A == B) {
    document.write("==");
  } else if (A > B) {
    document.write(">");
  } else {
    document.write("<");
  }
}
return comparison(1, 2);
