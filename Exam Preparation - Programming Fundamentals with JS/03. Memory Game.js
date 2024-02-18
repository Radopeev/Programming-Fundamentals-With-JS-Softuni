function memoryGame(input){
    let turns=0;
    let elements=input.shift().split(" ");
    while(input[0]!="end"){
        turns++;
        let [index1,index2]=input.shift().split(" ").map(Number);
        if(index1==index2 || index1<0|| index2<0){
            let middle=elements.length/2;
            let addedValue=-turns+'a';
            elements.splice(middle,0,addedValue);
            elements.splice(middle,0,addedValue);
            console.log(`Invalid input! Adding additional elements to the board`);
        }else {
            if(elements[index1]==elements[index2]){
                let element=elements[index1]
                let a=elements.slice(index1,2);
                elements.splice(index2,1);
                console.log(`Congrats! You have found matching elements - ${element}!`);
            }else {
                console.log("Try again!")
            }
        }
        if(elements.length==0){
            console.log(`You have won in ${turns} turns!`);
            break;
        }
    }
    if(elements.length!=0){
        console.log(`Sorry you lose :(`);
        console.log(elements.join(' '));
    }
}
memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])
console.log("----")
    memoryGame([
        "a 2 4 a 2 4", 
        "0 3", 
        "0 2",
        "0 1",
        "0 1", 
        "end"
        ])
console.log(`-----`)
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])