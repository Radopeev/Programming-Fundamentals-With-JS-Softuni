function movingTarget(input){
    let arr=input.shift().split(' ').map(Number);
    while(input[0]!=="End"){
        let tokens=input.shift().split(' ');
        let p1=Number(tokens[1]);
        let p2=Number(tokens[2]);
        if(tokens[0]=="Shoot"){
            arr[p1]-=p2;
            if(arr[p1]<0){
                arr.splice(p1,1);
            }
        }else if(tokens[0]=="Add"){
            if(arr[p1]!==undefined){
                arr.splice(p1,0,p2);
            }else {
                console.log(`Invalid placement!`);
            }
        }else if(tokens[0]=="Strike"){
            let radius=p2;
            let index=p1;
            if (index + radius <= arr.length - 1 && index - radius >= 0) {
                arr.splice(index - radius, radius * 2 + 1);
            } else {
                console.log(`Strike missed!`);
            }
        }
    }
    console.log(arr.join('|'));
}
movingTarget((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 1 3",
"End"]))
console.log("----")
movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"]))