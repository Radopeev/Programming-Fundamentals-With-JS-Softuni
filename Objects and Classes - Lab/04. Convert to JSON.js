function convertToJSON(name,lastName,hairColor){
    let Object={
        name:name,
        lastName:lastName,
        hairColor:hairColor,
    }
    console.log(JSON.stringify(Object))
}
convertToJSON('George', 'Jones', 'Brown')