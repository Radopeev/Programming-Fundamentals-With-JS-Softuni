function perfectNumber(num){
    function divisors(n){
        let arrOfDivisor=[];
        for(let i=0;i<n;i++){
            if(num%i===0){
                arrOfDivisor.push(i);
            }
        }
        return arrOfDivisor;
    }
    function sumOfDivisors(arr){
        let sum=0;
        for(let i=0;i<=arr.length;i++){
            sum+=arr[i];
        }
        return sum;
    }
    function isPerfect(num,sum){
        if(num===sum){
            return true;
        }else {
            return false;
        }
    }
    let arrOfDivisor= divisors(num);
    let sum=sumOfDivisors(arrOfDivisor);
    let isPerfectNumber=isPerfect(num,sum);
    if(isPerfectNumber){
        console.log("We have a perfect number!")
    }else {
        console.log("It's not so perfect.")
    }
}
perfectNumber(6)