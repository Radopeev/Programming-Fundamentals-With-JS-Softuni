function maxNumber(input){
    let topInteger=[];
    for(let i=0;i<input.length;i++){
        let currElement=input[i];
        let isTopInteger=true;
        for(let j=i+1;j<input.length;j++){
            let nextEl=input[j];
            if(currElement<=nextEl){
                isTopInteger=false;
                break;
            }
        }
        if(isTopInteger){
            topInteger.push(currElement);
        }
    }
    console.log(topInteger.join(" "));
}
maxNumber([1, 4, 3, 2])