function mapper(input){
    let str=input;
    let pattern=/(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let match=null;
    let travelPoints=0;
    let destinations=[];
    while((match=pattern.exec(str))){
        let destination=match.groups['name'];
        destinations.push(destination);
        travelPoints+=destination.length;
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`)
}
mapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')
mapper("ThisIs some InvalidInput")