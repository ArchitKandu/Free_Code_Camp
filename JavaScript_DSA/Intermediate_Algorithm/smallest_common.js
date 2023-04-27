function smallestCommons(arr) {
    let result=0;
    const start=arr[0]>arr[1]?arr[1]:arr[0];
    const end=arr[0]<arr[1]?arr[1]:arr[0];
    const max=start>end?start:end;
    let count=0;
    for(let i=max;;i++){
        count=0;
        for(let j=start;j<=end;j++)
            if(i%j==0) count++;
        if(count==end-start+1) return i;
    }
}
console.log(smallestCommons([1,5]));