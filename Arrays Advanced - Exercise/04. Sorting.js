function sorting(array){
    let sortedArray=array.sort((a,b)=>b-a);
    let result=[];
    while(sortedArray.length>0){
        let maxElement=sortedArray.shift();
        let minElement=sortedArray.pop();
        result.push(maxElement);
        result.push(minElement);
    }
    console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])