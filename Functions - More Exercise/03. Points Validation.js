function pointsValidation(input){
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];
    function Check(x,y){
        let distance=Math.sqrt(Math.pow(Math.abs(0 - x), 2) + Math.pow(Math.abs(0 - y), 2));
        if(distance===Math.trunc(distance)){
            return true;
        }else {
            return false;
        }
    }
    function fullCheck(x1,y1,x2,y2){
        let distance = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        if(distance===Math.trunc(distance)){
            return true;
        }else {
            return false;
        }
    }
    let firstCheck=Check(x1,y1);
    let secondCheck=Check(x2,y2);
    let thirdCheck=fullCheck(x1,y1,x2,y2)
    if(firstCheck==true){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if(secondCheck==true){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if(thirdCheck==true){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else {
        console.log(`{${x1}, ${y1}}} to {${x2}, ${y2}} is invalid`)
    }
}
//pointsValidation([3, 0, 0, 4])
console.log("----")
pointsValidation([2, 1, 1, 4])