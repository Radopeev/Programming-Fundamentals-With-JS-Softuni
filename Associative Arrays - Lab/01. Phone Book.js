function phoneBook(input){
    let result={};
    for(let line of input){
        let tokens=line.split(' ');
        let name=tokens[0];
        let phone=tokens[1];
        result[name]=phone;
    }
    for(let name in result){
        console.log(`${name} -> ${result[name]}`)
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])