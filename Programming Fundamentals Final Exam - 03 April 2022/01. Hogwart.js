function hogwart(input){
    let spell=input.shift();
    let currLine=input.shift();
    while(currLine!=="Abracadabra"){
        let tokens=currLine.split(' ');
        let command=tokens[0];
        if(command==="Abjuration"){
            spell=spell.toUpperCase();
            console.log(spell);
        }else if(command==='Necromancy'){
           spell=spell.toLowerCase();
           console.log(spell);
        }else if(command==="Illusion"){
            let index=tokens[1];
            let replacement=tokens[2];
            if(index<0 || index>spell.length){
                console.log('The spell was too weak.');
            }else {
                spell=spell.split('');
                spell.splice(index,1,replacement)
                console.log('Done!');
                spell=spell.join('');
            }
        }else if(command==="Divination"){
            let firstSubstring=tokens[1];
            let secondSubstring=tokens[2];
            if(!spell.includes(firstSubstring)){
                continue;
            }else {
                while(spell.includes(firstSubstring)){
                    spell=spell.replace(firstSubstring,secondSubstring);
                }
                console.log(spell);
            }
        }else if(command==="Alteration"){
            let substring=tokens[1];
            if(!spell.includes(substring)){
                continue;
            }else {
                spell=spell.replace(substring,'');
                console.log(spell);
            }
        }else {
            console.log('The spell did not work!')
        }
        currLine=input.shift();
    }
}
hogwart((["A7ci0",
"Abjuration",
"Illusion 1 c",
"Illusion 4 o",
"Abracadabra"]))
console.log('----')
hogwart((["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Divination q ga",
"Abracadabra"]))
console.log('----')
hogwart((["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"]))