function solution(n) {
    const sqrt = Math.sqrt(n);  // n의 제곱근 계산
    if (Number.isInteger(sqrt)) {  // 제곱근이 정수인지 확인
        return 1;
    } else {
        return 2;
    }
}
