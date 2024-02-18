function pirates(input){
    let lineOfInput=input.shift();
    let targets={};
    while(lineOfInput!="Sail"){
        let [city,population,gold]=lineOfInput.split("||");
        if(!targets.hasOwnProperty(city)){
            targets[city]=Number(population),Number(gold); 
        }else {
            targets[city][0]+=Number(population);
            targets[city][1]+=Number(gold);
        }
        lineOfInput=input.shift();
    }
    lineOfInput=input.shift();
    while(lineOfInput!=="End"){
        let [command,city,people,gold]=lineOfInput.split("=>");
        if(command=="Plunder"){
            targets[city][0]-=Number(people);
            targets[city][1]-=Number(gold);
            if(targets[city][0]<=0 ||targets[city][1]<=0){
                if(targets[city][0]<0){
                    population=Number(people)+Number(targets[city][0]);
                }else if(targets[city][1]<0){
                    gold=Number(gold)+Number(targets[city]);
                }
                delete targets[city];
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                console.log(`${city } has been wiped off the map!`)
            }else {
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed`)
            }
        }else if(command=="Prosper"){
            let amountOfGold=Number(people);
            if(amountOfGold>0){
                targets[city][1]+=amountOfGold;
                console.log(`${people} gold added to the city treasury. ${city} now has ${targets[city][1]}.`);
            }else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
        lineOfInput=input.shift();
    }
    let citiesToPrint=Object.values(targets).length;
    if(citiesToPrint<0){
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }else {
        console.log(`Ahoy, Captain! There are ${citiesToPrint} wealthy settlements to go to:`);
        Object.entries(targets).forEach((key)=>{
            console.log(`${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`)
        });

    }
}