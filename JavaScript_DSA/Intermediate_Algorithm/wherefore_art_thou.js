function whatIsInAName(collection, source) {
    let newArr=[...collection];
    let result=[];
    let found=true;
    for(let i=0;i<newArr.length;i++){
        for(let ele in source){
            found=true;
            if(newArr[i][ele]!==source[ele]){
                found=false;
                break;
            }
        }
        if(found) result.push(newArr[i]);
    }
    return result;
}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));