function train(input){
    let arrOfWagons=input.shift().split(" ").map(Number);
    let maxCapacity=Number(input.shift());
    for(let command of input){
        let currCommand=command.split(' ');
        if(currCommand[0]==="Add"){
            arrOfWagons.push(Number(currCommand[1]));
        }else {
            for(let j=0;j<arrOfWagons.length;j++){
                if(arrOfWagons[j]+Number(currCommand[0])<=maxCapacity){
                    arrOfWagons[j]+=Number(currCommand[0]);break;
                }
            }
        }
    }
    console.log(arrOfWagons.join(' '));
}
train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])
