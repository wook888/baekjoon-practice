function solution(my_string) {
   
    const tokens = my_string.split(' ');

    let result = parseInt(tokens[0], 10); 
    let operator = null;

    for (let i = 1; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            operator = '+';
        } else if (tokens[i] === '-') {
            operator = '-';
        } else {
            const number = parseInt(tokens[i], 10);
            if (operator === '+') {
                result += number;
            } else if (operator === '-') {
                result -= number;
            }
        }
    }

    return result;
}