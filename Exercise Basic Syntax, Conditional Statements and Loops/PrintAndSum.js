function printAndSum(n1,n2){
    n1=Number(n1);
    n2=Number(n2);
    let sequence='';
    let sum=0;
    for(let i=n1;i<=n2;i++){
        sum+=i;
        sequence=sequence+i+" ";
    }
    console.log(sequence);
    console.log("Sum: "+sum)
}
printAndSum(5,10)