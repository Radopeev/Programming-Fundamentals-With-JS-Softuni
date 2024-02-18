function champion(input){
    let targets=input.shift().split("|").map(Number);
    let points=0;
    while(input[0]!="Game over"){
        let tokens=input.shift().split(" ");
        let command=tokens.shift();
        if(command=="Shoot"){
            let [direction,p1,p2]=tokens[0].split("@");
            p1=Number(p1);
            p2=Number(p2);
            if(p1<0 || p1>=targets.length){
                continue;
            }
            if(direction=="Left"){
                let index=targets.length-Math.abs(p1-p2);
                while(index<0 || index>=targets.length){
                    if(index<0){
                        Math.abs(index+=targets.length);
                    }else{
                        Math.abs(index-targets.length);
                    }
                }
                targets[index]-=5;
                points+=5;
                if(targets[index]<5){
                    points+=targets[index];
                    targets[index]=0;
                }
            }else if(direction=="Right"){
                let index=targets.length-Math.abs(p2-p1);
                while(index<0 || index>=targets.length){
                    if(index<0){
                        Math.abs(index+=targets.length);
                    }else{
                        Math.abs(index-targets.length);
                    }
                }
                targets[index]-=5;
                points+=5;
                if(targets[index]<5){
                    points+=targets[index];
                    targets[index]=0;
                }
            }
        }else if(command=="Reverse"){
            targets=targets.reverse();
        }
    }
    console.log(targets.join(' - '));
    console.log(`John finished the archery tournament with ${points} points!`)
}
champion((["9|10|10|10|9",
"Shoot Left@0@2",
"Shoot Right@4@5",
"Shoot Right@6@5",
"Reverse",
"Game over"]))
champion((["20|30|40|50|60",
"Shoot Left@0@12",
"Shoot Right@4@15",
"Shoot Left@6@5",
"Reverse",
"Game over"]))