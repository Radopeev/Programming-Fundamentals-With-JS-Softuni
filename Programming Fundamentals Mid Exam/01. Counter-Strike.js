function counterStrike(input){
    let energy=Number(input.shift());
    let wonBattles=0;
    while(input[0]!=="End of battle"){
        let distance=Number(input.shift());
        energy-=distance;
        if(energy>=0){
            wonBattles++;
        }else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy+distance} energy`);
            break;
        }
        if(wonBattles%3==0){
            energy+=wonBattles;
        }
    }
    if(energy>=0){
        console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`)
    }
}
counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]))