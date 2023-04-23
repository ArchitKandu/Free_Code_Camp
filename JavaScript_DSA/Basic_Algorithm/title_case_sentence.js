function titleCase(str) {
    let newStr='';
    newStr+=str[0].toUpperCase();
    for(let i=1;i<str.length;i++){
        let temp='';
        if(str[i]===' '){
            temp=str[i]+str[i+1].toUpperCase();
            i++;
        }
        else{
            temp=str[i].toLowerCase();
        }
        newStr+=temp;
    }
    return newStr;
}
console.log(titleCase("I'm a little tea pot"));