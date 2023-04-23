function getIndexToIns(arr, num) {
    arr.sort(function(a,b){return a-b})
    if(arr.length===0) return 0;
    let index=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num) return i;
        else{
            if(arr[i]<num && (arr[i+1]>num || i===arr.length-1)) return i+1;
        }
    }
} 
console.log(getIndexToIns([2, 5, 10], 15));