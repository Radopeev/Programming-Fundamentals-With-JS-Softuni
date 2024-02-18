function shootForTheWin(input){
    let arr=input.shift().split(' ').map(Number);
    let shotTargets=[];
    let count=0;
    while(input[0]!=="End"){
        let index=Number(input.shift());
        if(index<0 || index>arr.length-1){
            continue;
        }
        count++;
        let shotTarget=arr[index];
        arr[index]=-1;
        shotTargets.push(arr[index]);
        for(let i=0;i<arr.length;i++){
            if(arr[i]!=-1){
                if(arr[i]>shotTarget){
                    arr[i]-=shotTarget;
                }else {
                    arr[i]+=shotTarget;
                }
            }
        }
    }
    console.log(`Shot targets: ${count} -> ${arr.join(' ')}`)
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])