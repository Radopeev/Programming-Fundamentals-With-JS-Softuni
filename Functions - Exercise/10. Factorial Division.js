function factorialDivision(factorial,num){
    function factorialCalculator(num){
        let totalFactoriel=1;
       while(num!=1){
           totalFactoriel*=num;
           num-=1;
       }
        return totalFactoriel;
    }
    function factorialDivisor(factorial,num) {
        return factorial/num;
    }
    let finalDivision=factorialCalculator(factorial)/factorialCalculator(num);
    console.log(finalDivision.toFixed(2));
}
factorialDivision(10,2)