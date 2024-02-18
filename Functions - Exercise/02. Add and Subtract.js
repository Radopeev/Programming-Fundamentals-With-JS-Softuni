function addAndSubsract(num1,num2,num3){
    let sum = (num1,num2) => num1+num2;
    let substract = (num1,num2) => num1-num2;
    let sumResult=sum(num1,num2);
    let result=substract(sumResult,num3)
    console.log(result);
}
addAndSubsract(23,6,10)