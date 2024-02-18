function google(input){
    let incomeFromSearch=Number(input.shift());
    let n=input.shift();
    let totalIncome=0;
    for(let i=1;i<=n;i++){
        let numOfSearches=Number(input.shift());
        if(numOfSearches===1){
            continue;
        }
        let income=incomeFromSearch*numOfSearches;
        if(i%3===0){
            income*=3;   
        }
        if(numOfSearches>5){
            income*=2;
        }else {

        }
        totalIncome+=income;
    }
    console.log(`Total money earned: ${totalIncome.toFixed(2)}`)
}
google(['5.5',
    '3',
    '1',
    '10',
    '5'])
google(([0.5,
    6,
    3,
    5,
    16,
    0,
    6,
    1]))
google(([3.0,
    7,
    0,
    1,
    2,
    3,
    4,
    6,
    15]))