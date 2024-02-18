function maxFunction(arr){
    let longestSequence=[];
    let firstArray=[];
    for(let i=0;i<arr.length;i++){
        firstArray=[];
        for(let j=i;j<arr.length;j++){
            if(arr[i]===arr[j]){
                firstArray.push(arr[j]);
            }else{
                break;
            }
        }
        if(firstArray.length>longestSequence.length){
            longestSequence=firstArray;
        }
    }
    console.log(longestSequence.join(" "));
}
maxFunction([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])