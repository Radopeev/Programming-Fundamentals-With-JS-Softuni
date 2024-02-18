function employee(input){
    let object={};
    for(let employee of input){
        object.name=employee;
        object.personalNumber=employee.length;
        console.log(`Name: ${object.name} -- Personal Number: ${object.personalNumber}`)
    }
}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])