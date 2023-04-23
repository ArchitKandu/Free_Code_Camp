function confirmEnding(str, target) {
    if(str.substr(-target.length)===target)
        return true;
    else return false;
}
console.log(confirmEnding("Bastian", "n"));