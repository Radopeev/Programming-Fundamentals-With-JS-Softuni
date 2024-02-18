function bombNumber(input,bomb){
    let bombNumber=bomb[0];
    let bombPower=bomb[1];
    let sum=0;
    for(let i=0;i<input.length;i++){
        let currentNum=input[i];
        if(currentNum===bombNumber){
            let startIndex=Math.max(0,i-bombPower);
            let end=bombPower*2+1;
            input.splice(startIndex,end);
            i=i-bombPower-1;
        }
    }
    for(let element of input){
        sum+=element;
    }
    console.log(sum);
}
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])