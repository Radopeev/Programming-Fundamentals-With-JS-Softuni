function magicMatrices(input){
    let isMagical=false;
    let result=[];
    let totalSum=0;
    for(let i=0;i<input.length;i++){
        let arr=input[i];
        let sum=0;
        for(let j=0;j<arr.length;j++){
            sum+=arr[j];
            totalSum+=arr[j];
        }
        result.push(sum);
    }
    let sumOfArray=0;
    for(let num of result){
        sumOfArray+=num;
    }
    
}
magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]])

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])