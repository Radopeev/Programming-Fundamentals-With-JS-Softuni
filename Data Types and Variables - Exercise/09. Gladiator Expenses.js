function gladiator(lostFights,helmet,sword,shield,armor){
    let totalExpenses=0;
    for(let i=1;i<=lostFights;i++){
        if(i%2===0){
            totalExpenses+=helmet;
        }
        if(i%3===0){
            totalExpenses+=sword;
        }
        if(i%6===0){
            totalExpenses+=shield;
        }
        if(i%12===0){
            totalExpenses+=armor;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
calculator(7,2,3,4,5)