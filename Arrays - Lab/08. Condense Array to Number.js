function condense(arr){
    let condensed=[];
    for(let n of arr){
        condensed.push(n);
    }
    while(condensed.length>1){
            let temp=[];
            for(let i=0;i<condensed.length-1;i++){
                temp.push(condensed[i]+condensed[i+1]);
            }
            condensed=temp;
    }
    console.log(condensed[0]);
}
condense([2,10,3])