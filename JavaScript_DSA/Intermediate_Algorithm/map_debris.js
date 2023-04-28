function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const newArr=[];
    for(let i=0;i<arr.length;i++){
        const temp={name:arr[i]['name']};
        const n=arr[i]['avgAlt']+earthRadius;
        const t=Math.round(2*Math.PI*Math.sqrt(Math.pow(n,3)/GM));
        temp['orbitalPeriod']=t;
        newArr.push(temp);
    }
    return newArr;
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));