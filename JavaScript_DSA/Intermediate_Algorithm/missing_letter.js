function fearNotLetter(str) {
    let newArr=str.split('');
    let result;
    function getNextChar(char) {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }
    for(let i=0;i<str.length;i++){
        if(newArr[i+1]!==getNextChar(newArr[i]) && i!==str.length-1){
            return getNextChar(newArr[i]);
        }
    }
    return result;
}
console.log(fearNotLetter("abce"));