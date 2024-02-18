function arrayRotation(arr,rotation){
    for(let i=0;i<rotation;i++){
        let rotationNum=arr[i].shift();
        arr.push(rotationNum);
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)