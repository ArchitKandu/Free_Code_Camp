function chunkArrayInGroups(arr, size) {
    let newArr=[];
    let count=1;
    for(let i=0;i<arr.length;i+=size){
        let temp=arr.slice(i,size*count);
        newArr.push(temp);
        count++;
    }
    return newArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));