function sortNumbers(num1,num2,num3){
    let n1,n2,n3;
    let flag1=false;
    let flag2=false;
    let flag3=false;
    if(num3>=num1&& num3>=num2){
        n1=num3;
        flag3=true;
    }else if(num1>=num2&& num1>=num3){
        n1=num1;
        flag1=true;
    }else if(num2>=num1&& num2>=num3){
        n1=num2;
        flag2=true;
    }
    let flag4=false;
    let flag5=false;
    let flag6=false;
    if(num3<=num1&& num3<=num2){
        n3=num3;
        flag6=true;
    }else if(num1<=num2&& num1<=num3){
        n3=num1;
        flag4=true;
    }else if(num2<=num1&& num2<=num3){
        n3=num2;
        flag5=true;
    }
    if((flag1 || flag4) && (flag2 || flag5)){
        n2=num3;
    }else if((flag1 || flag4) && (flag3 || flag6)){
        n2=num2;
    }else if((flag2 || flag5) && (flag3 || flag6)){
        n2=num1;
    }
    console.log(n1);
    console.log(n2);
    console.log(n3);
}
sortNumbers(2,1,3)
sortNumbers(-2,1,3)
sortNumbers(0,0,2)