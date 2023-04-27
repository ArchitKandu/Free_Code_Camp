function pairElement(str) {
    const newArr=str.split('');
    const result=[]
    for(let i=0;i<str.length;i++){
        let temp;
        switch(newArr[i]){
            case 'A':
                temp=['A','T'];
                break;
            case 'T':
                temp=['T','A'];
                break;
            case 'C':
                temp=['C','G'];
                break;
            case 'G':
                temp=['G','C'];
                break;
        }
        result.push(temp);
    }
    return result;
}
console.log(pairElement("ATCGA"));