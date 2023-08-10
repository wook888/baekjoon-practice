function solution(numbers) {
    const numberMap = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    let result = "";
    let currentNumber = "";

    for (let i = 0; i < numbers.length; i++) {
        currentNumber += numbers[i];
        if (numberMap[currentNumber] !== undefined) {
            result += numberMap[currentNumber];
            currentNumber = "";
        }
    }

    return parseInt(result);
}





