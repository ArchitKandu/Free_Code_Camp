function convertToRoman(num) {
    const singles=['','I','II','III','IV','V','VI','VII','VIII','IX'];
    const tens=['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];
    const hundreds=['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'];
    const thousands=['','M','MM','MMM','MMMM'];
    const length=num.toString().length;
    const numbers=num.toString().split('').map(Number);
    let roman='';
    let i=0;
    switch(length){
        case 4:
            roman = thousands[numbers[i]];
            i++;
        case 3:
            roman += hundreds[numbers[i]];
            i++;
        case 2:
            roman += tens[numbers[i]];
            i++;  
        case 1:
            roman += singles[numbers[i]];
    }
    return roman;
}
console.log(convertToRoman(36));