function integerFloat(firtsNum,secondNum,thirdNum){
    let sum=firtsNum+secondNum+thirdNum;
    sum % 1 ===0 ? sum+=' - Integer':sum+=' - Float';
    console.log(sum);
}
integerFloat(9, 100, 1.1)