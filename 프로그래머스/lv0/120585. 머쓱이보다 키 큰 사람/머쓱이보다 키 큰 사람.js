function solution(array, height) {
    var count = 0;
    for ( let i = 0; i < array.length; i++){
        if(array[i] > height){
          count++
        }
    }
    return count;
}