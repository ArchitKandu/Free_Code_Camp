function addTogether() {
    const[a,b]=arguments;
    if(typeof(a) !=='number') return undefined;
    if(arguments.length===1)
        return (b) => addTogether(a,b);
    if(typeof(b)!=='number') return undefined;
    return a+b;
}
console.log(addTogether(2,3));