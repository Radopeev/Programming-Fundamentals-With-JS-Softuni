function commonElements(arrOne,arrTwo){
    let arrThree=[];
    for(let i=0;i<arrOne.length;i++){
        for(let j=0;j<arrTwo.length;j++){
            if(arrOne[i]===arrTwo[j]){
                arrThree+=arrOne[i];
            }
        }
    }
    console.log(arrThree);
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])
