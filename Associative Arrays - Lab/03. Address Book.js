function addressBlock(input){
    let result={};
    for(let line of input){
        let tokens=line.split(':');
        let name=tokens[0];
        let address=tokens[1];
        result[name]=address;
    }
    let sorted=Object.entries(result);
    sorted.sort((a,b) => {
        let nameA=a[0];
        let nameB=b[0];
        return nameA.localeCompare(nameB);
    } )
    for(let key of sorted){
        let name=key[0];
        let address=key[1];
        console.log(`${name} -> ${address}`)
    }
}
addressBlock(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])