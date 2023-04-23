function largestOfFour(arr) {
    let newArr=[];
    for(let i=0;i<4;i++){
        let temp=Math.max(arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
        newArr.push(temp);
    }
    return newArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));