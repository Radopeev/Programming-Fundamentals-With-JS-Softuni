function wordOccurrencies(input){
    let result={};
    for(let line of input){
        let word=line;
        result[word];
        if(result.hasOwnProperty(word)){
            result[word]+=1;
        }else{
            result[word]=+1;
        }
    }
    let sorted=Object.entries(result);
    sorted.sort((a,b) => {
        let countA=Number(a[1]);
        let countB=Number(b[1]);
        return countB-countA;
    } )
    for(let key of sorted){
        let word=key[0];
        let count=key[1];
        console.log(`${word} -> ${count} times`)
    }
}
wordOccurrencies(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])