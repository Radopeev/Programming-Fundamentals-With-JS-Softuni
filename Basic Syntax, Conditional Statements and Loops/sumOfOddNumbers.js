function sumOfOddNumbers(n){
    let sum=0;
    let i=1;
    while(n>0){
        console.log(i)
        sum+=i;
        i+=2;
        n--;
    }
    console.log("Sum: "+sum);
}
sumOfOddNumbers(5)