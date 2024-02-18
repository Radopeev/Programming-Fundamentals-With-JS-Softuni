function houseParty(array){
    let list=[];
    for(let i=0;i<array.length;i++){
        let tokens=array[i].split(' ');
        if(tokens.length<4){
            if(list.includes(tokens[0])){
                console.log(`${tokens[0]} is already in the list!`)
            }
            list.push(tokens[0]);
            
        }else {
            if(list.includes(tokens[0])){
                list.pop(tokens[0]);
            }else {
                console.log(`${tokens[0]} is not in the list!`)
            }
        }
    }
    for(let i=0;i<list.length;i++){
        let currElement=list[i];
        for(let j=i+1;j<list.length;j++){
            let nextElement=list[j];
            if(currElement===nextElement){
                list.splice(j,1);
            }
        }
    }
    console.log(list.join('\n'));
}
//houseParty(['Allie is going!','George is going!','John is not going!','George is not going!'])
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])