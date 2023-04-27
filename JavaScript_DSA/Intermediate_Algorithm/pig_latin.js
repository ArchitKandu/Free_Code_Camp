function translatePigLatin(str) {
    const newStr=str.split('');
    const part=[];
    let result=[];
    let index=0;
    const vowel=['a','e','i','o','u'];
    if(vowel.includes(newStr[0])){
        result=[...newStr];
        result.push('w','a','y');
    }
    else{
        for(let i in newStr){
            if(vowel.includes(newStr[i]))
                break;
            else {
                part.push(newStr[i]);
                index++;
            }
        }
        result=newStr.slice(index,newStr.length);
        for(let i in part)
            result.push(part[i]);
        result.push('a');
        result.push('y');
    }
    return result.join('');
}
console.log(translatePigLatin("california"));