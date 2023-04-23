function factorialize(num) {
    let result = 1;
    while(num > 0){
        result = result * num;
        num--;
    }
    return result;
}
console.log(factorialize(5));