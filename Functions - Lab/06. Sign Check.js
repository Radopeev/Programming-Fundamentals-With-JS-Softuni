function signCheck(num1,num2,num3){
    let output='';
    if(num1>0){
        if(num2>0){
            if(num3>0){
                output="Positive";
            }else {
                output="Negative";
            }
        }else {
            if(num3>0){
                output="Negative";
            }else {
                output="Positive";
            }
        }
    }else {
        if(num2>0){
            if(num3>0){
                output="Negative";
            }else {
                output="Positive";
            }
        }else {
            if(num3>0){
                output="Positive";
            }else {
                output="Negative";
            }
        }
    }
    return output;
}//console.log(signCheck(5,12,-15))
console.log(signCheck(-6,-12,14))
console.log(signCheck())