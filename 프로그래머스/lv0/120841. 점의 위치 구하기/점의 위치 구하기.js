function solution(dot) {
	// if / else if 조건문을 사용하여 각각 적합한 조건문을 작성
    if(dot[0] > 0 && dot[1] > 0) {
        return 1
    } else if(dot[0] < 0 && dot[1] > 0) {
        return 2
    } else if(dot[0] < 0 && dot[1] < 0) {
        return 3
    } else if(dot[0] > 0 && dot[1] < 0) {
        return 4
    }
}