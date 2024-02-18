function equalSums(arr){
    let hasEqualSum=false;
    let indexOfEquality=0;
    for(let i=0;i<arr.length;i++){
        let leftSum=0;
        let rightSum=0;
        for(let j=i-1;j>=0;j--){
            leftSum+=arr[j];
        }
        for(let j=i+1;j<arr.length;j++){
            rightSum+=arr[j];
        }
        if(leftSum===rightSum){
            hasEqualSum=true;
            indexOfEquality=i;
        }
    }
    if(hasEqualSum){
        console.log(indexOfEquality);
    }else{
        console.log("no");
    }
}
equalSums([1, 2, 3, 3])