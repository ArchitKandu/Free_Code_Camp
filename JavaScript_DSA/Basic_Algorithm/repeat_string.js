function repeatStringNumTimes(str, num) {
    let newStr='';
    if(num!=0)
        for(let i=0;i<num;i++)
            newStr+=str;
    return newStr;
}
console.log(repeatStringNumTimes("abc", 3));