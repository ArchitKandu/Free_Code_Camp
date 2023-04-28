function truthCheck(collection, pre) {
    let result=true;
    for(let i=0;i<collection.length;i++)
        if(collection[i][pre]===false||collection[i][pre]===0||collection[i][pre]===''||collection[i][pre]===null||collection[i][pre]===undefined||Number.isNaN(collection[i][pre])) return false;
    return result;
}  
console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number"));