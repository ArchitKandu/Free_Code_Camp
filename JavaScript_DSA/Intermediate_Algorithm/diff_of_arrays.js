function diffArray(arr1, arr2) {
    const newArr=[];
    let count=0;
    function result(a,b){
        for(let i=0;i<a.length;i++){
            if(b.indexOf(a[i])===-1)
                newArr.push(a[i]);
        }
    }
    result(arr1,arr2);
    result(arr2,arr1);
    return newArr;
} 
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));