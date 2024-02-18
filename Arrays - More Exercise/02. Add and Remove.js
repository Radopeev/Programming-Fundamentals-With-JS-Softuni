function addRemove(input){
    let result=[];
    let n=0;
    for(let i=0;i<input.length;i++){
        n++;
        if(input[i]==='add'){
            result.push(n);
        }else if(input[i]==='remove'){
            result.pop(n);
        }
    } 
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}
//addRemove(['add', 'add', 'add', 'add'])
console.log('-------')
addRemove(['add','remove'])