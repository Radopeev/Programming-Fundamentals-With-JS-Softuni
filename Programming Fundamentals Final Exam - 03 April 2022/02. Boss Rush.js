function bossRush(input){
    let pattern=/^[|](?<bossName>([A-Z]{4,}))[|]:#(?<title>(([A-Za-z]{1,}) ([A-Za-z]{1,})))#/g;
    let n=input.shift();
    let match=null;
    for(let i=0;i<n;i++){
        let line=input.shift();
        if(line.match(pattern)){
            match=pattern.exec(line);
           let bossName=match.groups['bossName'];
           let title=match.groups['title'];
           console.log(`${bossName}, The ${title}`);
           console.log(`>> Strength: ${bossName.length}`);
           console.log(`>> Armor: ${title.length}`);
        }else (
            console.log("Access denied!")
        )
    }
}
bossRush((['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']))
bossRush((['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#']))