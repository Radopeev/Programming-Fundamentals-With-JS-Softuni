function lift(input){
    let people=Number(input.shift());
    let lifts=input.shift().split(' ').map(Number);
    let flag=false;
    for(let i=0;i<lifts.length;i++){
        while(lifts[i]<4 && people>0){
                lifts[i]++;
                people--;
            }
        }
    for(let lift of lifts){
        if(lift==4) {
            continue;
        } else {
            flag=true;break
        }
    }
    if(people>0){
        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(lifts.join(" "));
    }else if(flag){
        console.log(`The lift has empty spots!`);
        console.log(lifts.join(" "));
    }else{
        console.log(lifts.join(" "));
    }
}
lift([
    "20",
    "0 0 0 0 0"
   ])
console.log('----')
lift([
    "20",
    "0 2 0"
   ])