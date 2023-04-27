function spinalCase(str) {
    const newStr=str.replace(/_/g,' ');
    const capSeperated=newStr.split(/(?=[A-Z])/);
    const joined1=capSeperated.join(' ');
    const spaceSeperated=joined1.split(/\W/);
    const filtered=spaceSeperated.filter(function(n){
        if(n!=='') return n;
    });
    const mapped=filtered.map(function(n){
        return n.toLowerCase();
    });
    const result=mapped.join('-');
    return result;
}
console.log(spinalCase("The_Andy_Griffith_Show"));