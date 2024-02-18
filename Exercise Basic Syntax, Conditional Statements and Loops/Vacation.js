function vacation(num,type,day){
    num=Number(num);
    let price=0;
    if(type==="Students"){
        switch(day){
            case "Friday":price=num*8.45;break;
            case "Saturday":price=num*9.80;break;
            case "Sunday":price=num*10.46;break;
        }
        if(num>=30){
            price=price*0.85;
        }
    }else if(type==="Business"){
        if(num>=100){
            num=num-10;
        }
        switch(day){
            case "Friday":price=num*10.90;break;
            case "Saturday":price=num*15.60;break;
            case "Sunday":price=num*16;break;
        }
    }else if(type==="Regular"){
        switch(day){
            case "Friday":price=num*15;break;
            case "Saturday":price=num*20;break;
            case "Sunday":price=num*22.50;break;
        }
        if(num>=10 && num<=20){
            price=price*0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30,'Students','Sunday')