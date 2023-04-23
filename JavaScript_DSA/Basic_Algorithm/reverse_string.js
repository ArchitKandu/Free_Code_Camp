function reverseString(str) {
    let newString = '';
    for(let i in str)
        newString = str[i] + newString;
    return newString;
}
  
console.log(reverseString("hello"));