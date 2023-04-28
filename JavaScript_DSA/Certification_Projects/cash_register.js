function checkCashRegister(price, cash, cid) {
    let change=cash-price;
    let temp=0;
    const result=[];
    const final={status:''};

    let count=0;
    while(change>=100 && cid[8][1]!==0){
        count++;
        change-=100;
        cid[8][1]-=100;
    }
    result.unshift(['ONE HUNDRED',count*100]);
    
    count=0;
    while(change>=20 && cid[7][1]!==0){
        count++;
        change-=20;
        cid[7][1]-=20;
    }
    result.unshift(['TWENTY',count*20]);
    
    count=0;
    while(change>=10 && cid[6][1]!==0){
        count++;
        change-=10;
        cid[6][1]-=10;
    }
    result.unshift(['TEN',count*10]);
    
    count=0;
    while(change>=5 && cid[5][1]!==0){
        count++;
        change-=5;
        cid[5][1]-=5;
    }
    result.unshift(['FIVE',count*5]);
    
    count=0;
    while(change>=1 && cid[4][1]!==0){
        count++;
        change-=1;
        cid[4][1]-=1;
    }
    result.unshift(['ONE',count*1]);
    
    count=0;
    while(change>=0.25 && cid[3][1]!==0){
        count++;
        change-=0.25;
        cid[3][1]-=0.25;
    }
    result.unshift(['QUARTER',count*0.25]);
    
    count=0;
    while(change>=0.1 && cid[2][1]!==0){
        count++;
        change-=0.1;
        cid[2][1]-=0.1;
    }
    result.unshift(['DIME',count*0.1]);
    
    count=0;
    while(change>=0.05 && cid[1][1]!==0){
        count++;
        change-=0.05;
        cid[1][1]-=0.05;
    }
    result.unshift(['NICKEL',count*0.05]);
    
    count=0;
    while(change>=0.01 && cid[0][1]!==0){
        count++;
        change-=0.01;
        cid[0][1]-=0.01;
    }
    if(change<0.01 && change>0.0095){
        change=0;
        count++;
    }
    if(cid[0][1]<0.01 && cid[0][1]>0.0095) cid[0][1]=0;
    result.unshift(['PENNY',count*0.01]);

    count=0;
    if(change!==0){
        final['status']='INSUFFICIENT_FUNDS';
        final['change']=[];
    }
    else{
        for(let i in cid)
            if(cid[i][1]===0) count++;
        
        if(count===9){
            final['status']='CLOSED';
            final['change']=result;
        }
        else{
            final['status']='OPEN';
            const temp=[];
            for(let i in result)
                if(result[i][1]!==0) temp.unshift(result[i]);
            final['change']=temp;
        }
    }

    return final;
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// {status: "OPEN", change: [["QUARTER", 0.5]]}


// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}----


// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "INSUFFICIENT_FUNDS", change: []}


// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "INSUFFICIENT_FUNDS", change: []}


// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}----