function searchForNumber(input,numbers){
    let takenNumbers=numbers[0];
    let deletedNumbers=numbers[1];
    let searchedNumber=numbers[2];
    let myNewArr=input.splice(0,takenNumbers);
    myNewArr.splice(0,deletedNumbers);
    let count=0;
    for(let i=0;i<myNewArr.length;i++){
        if(myNewArr[i]===searchedNumber){
            count++;
        }
    }
        console.log(`Number ${searchedNumber} occurs ${count} times.`)
}
searchForNumber([5, 2, 3, 4, 1, 6],[5, 2, 3])