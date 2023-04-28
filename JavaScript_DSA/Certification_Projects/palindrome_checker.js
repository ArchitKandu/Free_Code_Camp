function palindrome(str) {
    const changed=str.split(/\W/).join('').split('_').join('').toLowerCase();
    const splitted=changed.split('');
    const reversed=splitted.reverse();
    const final=reversed.join('');
    return final===changed;
}
console.log(palindrome("eye"));