function biggestOf3(num1,num2,num3){
    let max=-1000000;
    if(num1>max){
        max=num1;
        if(num2>num1){
            max=num2;
            if(num3>num2){
                max=num3;
            }
        }
    }
    console.log(max);
}
biggestOf3(130,
    5,
    99)