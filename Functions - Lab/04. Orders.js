function orders(product,quantity){
    let price=0;
    switch(product){
        case "coffee":price=quantity*1.5;break;
        case "water":price=quantity*1.00;break;
        case "coke":price=quantity*1.40;break;
        case "snacks":price=quantity*2.00;break;
    }
    return product,price.toFixed(2);
}
console.log(orders("water",5).toFixed(2));
