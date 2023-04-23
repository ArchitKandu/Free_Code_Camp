function mutation(arr) {    
    const reg = new RegExp(`[^${arr[0]}]`,'i');
    return !reg.test(arr[1]);
}
console.log(mutation(["hello", "hey"]));