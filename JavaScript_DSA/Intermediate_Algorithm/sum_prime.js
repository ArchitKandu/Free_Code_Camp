function sumPrimes(num) {
    const newArr=[];
    function isPrime(n){
        if(n<=1) return false;
        for(let i=2;i<n;i++)
            if(n%i==0) return false;
        return true;
    }
    let sum=0;
    for(let i=2;i<=num;i++)
        if(isPrime(i)){ 
            newArr.push(i);
            sum+=i;
        }
    return sum;
}
console.log(sumPrimes(10));