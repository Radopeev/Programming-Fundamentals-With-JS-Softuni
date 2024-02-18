function hero(input){
    let heroes={};
    while(input[0]!=="End"){
        let [command,heroName,spellName]=input.shift().split(' ');
        if(command==="Learn"){
            if(!heroes.hasOwnProperty(heroName)){
                console.log(`${heroName} doesn't exist.`);
            }else{
                    for(let spell of (heroes[heroName].spellName)){
                        if(spell==spellName){
                            console.log(`${heroName} has already learnt ${spellName}`);continue;
                        }
                    }
                    (heroes[heroName].spellName).push(spellName);
            }
        }else if(command==="Enroll"){
            if(!heroes.hasOwnProperty(heroName)){
                spellName=[];
                heroes[heroName]={heroName,spellName};
            }else {
                console.log(`${heroName} is already enrolled.`)
            }
        }else if(command==="Unlearn"){
            if(!heroes.hasOwnProperty(heroName)){
                console.log(`${heroName} doesn't exist.`);
            }else {
                for(let spell of (heroes[heroName].spellName)){
                    if(spell==spellName){
                        (heroes[heroName].spellName).splice(spellName.indexOf(),1);
                    }else {
                        console.log(`${heroName} doesn't know ${spellName}."`)
                    }
                }
            }
        }
    }
    let output=Object.entries(heroes);
    console.log('Heroes:')
    for(let line of output){
        let name=line[1];
        let spells=name.spellName;
        console.log(`== ${name.heroName}: ${spells.join(', ')}`);
    }
}
hero((["Enroll Stefan","Enroll Peter","Enroll Stefan","Learn Stefan ItShouldWork","Learn Stefan kopane","Learn John ItShouldNotWork","Unlearn George Dispel","Unlearn Stefan kopane","Unlearn Stefan ItShouldWork","End"]))
hero((["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Learn Stefan Kopane",
"Unlearn Stefan NotFound",
"End"]))