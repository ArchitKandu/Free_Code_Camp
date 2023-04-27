function convertHTML(str) {
    const newArr=str.split('');
    for(let i=0;i<newArr.length;i++){
        switch(newArr[i]){
            case '&':
                newArr[i]='&amp;'
                break;
            case '<':
                newArr[i]='&lt;'
                break;
            case '>':
                newArr[i]='&gt;'
                break;
            case '"':
                newArr[i]='&quot;'
                break;
            case "'":
                newArr[i]='&apos;'
                break;
        }
    }
    return newArr.join('');
}
console.log(convertHTML("Dolce & Gabbana"));