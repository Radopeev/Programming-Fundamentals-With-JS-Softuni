function reception(input){
    let workerOne=Number(input.shift());
    let workerTwo=Number(input.shift());
    let workerThree=Number(input.shift());
    let workforce=workerOne+workerTwo+workerThree;
    let time=0;
    while(input>0){
        time++;
        
        if(time%4!==0){
            input-=workforce;
        }    
    }
    console.log(`Time needed: ${time}h.`)
}
reception(['5','6','4','20'])
reception(['3','2','5','40'])