function minerTask(input){
    let result={};
    for(let i=0;i<input.length;i+=2){
        let resource=input[i];
        let quantity=Number(input[i+1]);
        if(result.hasOwnProperty(resource)){
            result[resource]+=quantity;
        }else{
            result[resource]=quantity;
        }
    }
    for(let [resource,quantity] of Object.entries(result)){
        console.log(`${resource} -> ${quantity}`)
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])