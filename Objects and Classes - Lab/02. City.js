function city(input){
    let town=input;
    for(let key of Object.keys(town)){
        console.log(`${key} -> ${town[key]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})