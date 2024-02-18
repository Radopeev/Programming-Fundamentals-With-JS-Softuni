function print(input){
    let n=Number(input.pop());
    let result=[];
    for(let i=0;i<input.length;i+=n){
        result.push(input[i]);
    }
    console.log(result.join(' '));
}
print(['5', '20', '31', '4', '20', '2'])
print(['1', '2', '3', '4', '5', '6'])