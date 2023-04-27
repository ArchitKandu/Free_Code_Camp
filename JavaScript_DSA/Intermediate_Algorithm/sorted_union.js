function uniteUnique(...arr) {
    let newArr=[];
    for(let i=0;i<arr.length;i++)
        newArr=newArr.concat(arr[i]);
    const result=[...new Set(newArr)];
    return result;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);