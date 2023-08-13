function solution(array) {
    const totalSevens = array.join('').split('7').length - 1;
    return totalSevens;
}