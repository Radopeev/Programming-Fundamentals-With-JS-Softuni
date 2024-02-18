function chessBoard(num) {
    let output1="black white";
    let output2="white black";
    for(let i=1;i<num;i++){
        if(i%2===0){
            console.log(output1*num)
        }else {
            console.log(output2*num);
        }
    }
}
chessBoard(3)