function burgerBus(input){
    let totalProfit=0;
    let numOfCities=input.shift();
    for(let i=1;i<=numOfCities;i++){
        let city=input.shift();
        let earnedMOney=Number(input.shift());
        let expenses=Number(input.shift());
        if(i%5===0){
            earnedMOney=earnedMOney*0.9;
        }else if(i%3===0){
            expenses=expenses+expenses/2;
        }
        let profit=Number((earnedMOney-expenses).toFixed(2));
        totalProfit+=profit;
        console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`)
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
}
burgerBus((["-1","Lille","2226.00","1200.60","Rennes","6320.60","5460.20","Reims","600.20","452.32","Bordeaux","6925.30","2650.40","Montpellier","680.50","290.20","Lille","2226.00","1200.60","Rennes","6320.60","5460.20","Reims","600.20","452.32","Bordeaux","6925.30","2650.40","Montpellier","680.50","290.20","Lille","2226.00","1200.60","Rennes","6320.60","5460.20","Reims","600.20","452.32","Bordeaux","6925.30","2650.40","Montpellier","680.50","290.20"]))