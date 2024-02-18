function discovery(input){
    let n=input.shift();
    let plants={};
    for(let i=0;i<n;i++){
        let [plant, rarity]=input.shift().split("<->");
        rarity=Number(rarity);
        let rating=0;
        let count=0;
        plants[plant]={
            rarity,
            rating,
            count
        }
    }
    while(input[0]!="Exhibition"){
        let tokens=input.shift().split(': ');
        let command=tokens[0];
        let [name,rating]=tokens[1].split(' - ');
        if(command=="Rate"){
            if(plants.hasOwnProperty(name)){
                plants[name].rating+=Number(rating);
                plants[name].count++;
            }else {
                console.log(`error`);
            }
        }else if(command=="Update"){
            if(plants.hasOwnProperty(name)){
                plants[name].rarity=rating;
            }else {
                console.log(`error`);
            }
        }else if(command=="Reset"){
            if(plants.hasOwnProperty(name)){
                plants[name].rating=0;
            }else {
                console.log(`error`);
            }
        }else {
            console.log(`error`);
        }
    }
    console.log(`Plants for the exhibition:`);
    let output=Object.entries(plants);
    for(let line of output){
        let [plant,object]=Object.values(line);
        let averageRating=object.rating/object.count;
        console.log(`- ${plant}; Rarity: ${object.rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
discovery((["4",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Welwitschia<->10",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"La Arnoldii",
"Exhibition"]))
discovery((["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]))