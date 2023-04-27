function myReplace(str, before, after) {
    const result=str.split(' ');
    const index=result.indexOf(before);
    if(result[index][0]===result[index][0].toUpperCase()){
        let temp=after.split('');
        temp[0]=temp[0].toUpperCase();
        after=temp.join('');
    }
    else if(result[index][0]===result[index][0].toLowerCase()){
        let temp=after.split('');
        temp[0]=temp[0].toLowerCase();
        after=temp.join('');
    }
    result[index]=after;
    return result.join(' ');
}  
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));