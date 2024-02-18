function nfs(input){
    let n=input.shift();
    let cars={};
    for(let i=0;i<n;i++){
        let [carName,mileage,fuel]=input.shift().split("|");
        mileage=Number(mileage);
        fuel=Number(fuel);
        cars[carName]={
            mileage,
            fuel
        }
    }
    while(input[0]!="Stop"){
        let [command,car,p1,p2]=input.shift().split(" : ");
        p1=Number(p1);
        p2=Number(p2);
        if(command=="Drive"){
            if(p2>cars[car].fuel){
                console.log("Not enough fuel to make that ride");
            }else {
                cars[car].mileage+=p1;
                cars[car].fuel-=p2;
                console.log(`${car} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`)
            }
            if(cars[car].mileage>100000){
                delete cars[car];
                console.log(`Time to sell the ${car}!`)
            }
        }else if(command=="Refuel"){
            cars[car].fuel+=p1;
            let refilledFuel=Math.abs(75-(cars[car].fuel-p1));
            if(cars[car].fuel>75){
                cars[car].fuel=75;
                console.log(`${car} refueled with ${refilledFuel} liters`)
            }else {console.log(`${car} refueled with ${p1} liters`)}
        }else if(command=="Revert"){
            cars[car].mileage-=p1;
            if(cars[car].mileage<10000){
                cars[car].mileage=10000;
            }else {
                console.log(`${car} mileage decreased by ${p1} kilometers`)
            }
        }
    }
    let output=Object.entries(cars);
    for(let line of output){
        let [car,object]=Object.values(line);
        console.log(`${car} -> Mileage: ${object.mileage} kms, Fuel in the tank: ${object.fuel} lt.`);
    }
}
nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])