function pianist(input){
    let n=input.shift();
    let pieces={};
    for(let i=0;i<n;i++){
        let [piece,composer,key]=input.shift().split("|");
        pieces[piece]=composer;
        pieces[piece]=key;
        pieces[piece]={
            composer,
            key
        }
    }
    while(input[0]!="Stop"){
        let [command,piece,composer,key]=input.shift().split("|");
        if(command=="Add"){
            if(pieces.hasOwnProperty(piece)){
                console.log(`${piece} is already in the collection!`);
            }else {
            pieces[piece]=composer;
            pieces[piece]=key;
            pieces[piece]={
                composer,
                key
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
        }else if(command=="Remove"){
            if(pieces.hasOwnProperty(piece)){
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }else if(command=="ChangeKey"){
            if(pieces.hasOwnProperty(piece)){
                pieces[piece].key=composer;
                console.log(`Changed the key of ${piece} to ${composer}!`)
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    }
    let output=Object.entries(pieces);
    for(let line of output){
        let [piece,composer,key]=Object.values(line);
        console.log(`${piece} -> Composer: ${composer.composer}, Key: ${composer.key}`);
    }
}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])