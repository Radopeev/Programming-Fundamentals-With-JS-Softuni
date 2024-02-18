function magicCards(input){
    let deck=input.shift().split(":");
    let newDeck=[];
    while(input[0]!=="Ready"){
        let [command,p1,p2]=input.shift().split(" ");
        if(command=="Add"){
            if(deck.includes(p1)){
                newDeck.push(p1);
            }else {
                console.log(`Card not found.`)
            }
        }else if(command=="Insert"){
            let index=Number(p2);
            if(deck.includes(p1) && (index>=0 && index<newDeck.length)){
                newDeck.splice(p2,0,p1);
            }else {
                console.log("Error!");
            }
        }else if(command=="Remove"){
            if(newDeck.includes(p1)){
                for(let i=0;i<newDeck.length;i++){
                    if(newDeck[i]==p1){
                        newDeck.splice(i,1);
                    }
                }
            }else {
                console.log(`Card not found.`);
            }
        }else if(command=="Swap"){
            let index1=newDeck.indexOf(p1);
            let index2=newDeck.indexOf(p2);
            let a=newDeck[index1];
            newDeck[index1]=newDeck[index2];
            a=newDeck[index2]=a;
        }else if(command=="Shuffle"){
            newDeck=newDeck.reverse();
        }
    }
    console.log(newDeck.join(' '));
}
magicCards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
"Add Moonfire",
"Add Bite",
"Insert Claw 0",
"Swap Claw Moonfire",
"Remove Bite",
"Ready"])
magicCards((["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
"Add UndergroundSea",
"Add Timetwister",
"Remove Wrath",
"Add CopyArtifact",
"Shuffle deck",
"Ready"]))
magicCards((["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
"Add BlackLotus",
"Insert Claw 1",
"Add Moonfire",
"Add Bite",
"Ready"]))