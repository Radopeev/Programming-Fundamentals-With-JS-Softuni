function spiceMustFlow(spices){
    let days=0;
    let consumedSpices=0;
    while(spices>=100){
        days++;
        consumedSpices+=spices-26;
        spices-=10;
    }
    console.log(days);
    if(days!=0){
        console.log(consumedSpices-26);
    }else{
        console.log(consumedSpices);
    }
}
spiceMustFlow(111)