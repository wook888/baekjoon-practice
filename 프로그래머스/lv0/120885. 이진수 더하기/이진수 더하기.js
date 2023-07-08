function solution(bin1, bin2) {
  let result = ""; 
  let carry = 0; 
    
  while (bin1.length !== bin2.length) {
    if (bin1.length < bin2.length) {
      bin1 = "0" + bin1; 
    } else {
      bin2 = "0" + bin2;
    }
  }

 
  for (let i = bin1.length - 1; i >= 0; i--) {
    const bit1 = parseInt(bin1[i]);
    const bit2 = parseInt(bin2[i]);

    const sum = bit1 + bit2 + carry;
    result = (sum % 2) + result; 
    carry = Math.floor(sum / 2); 
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
}
