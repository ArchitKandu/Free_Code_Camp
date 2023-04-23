function truncateString(str, num) {
    let newStr='';
    if(num<str.length){
        for(let i=0;i<num;i++)
            newStr+=str[i];
        return newStr+'...';
    }
    else return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));