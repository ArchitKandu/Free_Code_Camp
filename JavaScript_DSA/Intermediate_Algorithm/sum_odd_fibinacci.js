function sumFibs(n) {
    let a=0;
    let b=1;
    if(n===1 || n===2) return 1;
    else{
        const newArr=[a,b];
        let sum=1;
        let temp=0;
        while(temp<=n){
            temp=a+b;
            a=b;
            b=temp;
            if(temp<=n){
                newArr.push(temp);
                if(temp%2!==0) sum+=temp;
            }
        }
        return sum;
    }
}
console.log(sumFibs(4));