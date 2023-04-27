function destroyer(arr, ...args) {
    const newArr=[...arr];
    for(let arg in args){
        while(newArr.indexOf(args[arg])!==-1){
            newArr.splice(newArr.indexOf(args[arg]),1);
        }
    }
    return newArr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));