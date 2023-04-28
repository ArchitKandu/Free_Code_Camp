function rot13(str) {
    let result='';
    const isCharacter=function(char){
        return /[A-Z]/.test(char);
    }
    let n=0;
    for(let i=0;i<str.length;i++){
        n=str[i].charCodeAt(0)+13;
        if(isCharacter(str[i])){
            if(n>90) result+=String.fromCharCode(n-90+64);
            else result+=String.fromCharCode(n);
        }
        else result+=str[i];
    }
    return result;
}
console.log(rot13("SERR PBQR PNZC"));