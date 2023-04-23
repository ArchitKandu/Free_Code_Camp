function findLongestWordLength(str) {
    let result=0;
    let count=0;
    for(let i in str){
        if(str[i]===' ') count=0;
        else count++;
        if(count>result)
            result=count;
    }
    return result;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));