function subtraction(input){
    let sumOfEven=0;
    let sumOfOdd=0;
    for(let i=0;i<input.length;i++){
        if(input[i]%2===0){
            sumOfEven+=input[i];
        }
    }
    for(let i=0;i<input.length;i++){
        if(input[i]%2!==0){
            sumOfOdd+=input[i];
        }
    }
    console.log(sumOfEven-sumOfOdd);
}
subtraction([1,2,3,4,5,6])