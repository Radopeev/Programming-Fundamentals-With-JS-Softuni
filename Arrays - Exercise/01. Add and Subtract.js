function addSubstract(input){
    let originalSum=0;
    let modifiedSum=0;
    for(let i=0;i<input.length;i++){
        originalSum+=input[i];
    }
    for(let i=0;i<input.length;i++){
        if(input[i]%2===0){
            input[i]+=i;
            modifiedSum+=input[i]
        }else{
            input[i]-=i;
            modifiedSum+=input[i];
        }
    }
    console.log(input);
    console.log(originalSum);
    console.log(modifiedSum);
}
addSubstract([5, 15, 23, 56, 35])