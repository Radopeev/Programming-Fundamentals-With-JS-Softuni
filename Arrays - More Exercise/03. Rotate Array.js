function rotateArray(input){
    let rotationNum=input.pop();
    for(let i=0;i<rotationNum;i++){
        let lastNumber=input.pop();
        input.unshift(lastNumber);
    }
    console.log(input.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])