function dropElements(arr, func) {
    const newArr=[...arr];
    let count=0
    for(let i=0;i<newArr.length;i++){
        if(func(newArr[i])){
            break;
        }
        count++;
    }
    const spliced=newArr.splice(0,count);
    return newArr;
}
console.log(dropElements([1,2,3], function(n) {return n < 3;}));