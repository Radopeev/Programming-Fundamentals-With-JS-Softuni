function subset(input){
    let result=[];
    let currMax=0;
    for(let i=0;i<input.length;i++){
        if(input[i]>currMax){
            currMax=input[i];
        }
        if(currMax<=input[i]){
            result.push(input[i]);
        }
    }
    console.log(result.join(' '));
}
subset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])