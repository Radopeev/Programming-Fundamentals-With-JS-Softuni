function activationKey(input){
    let activationKey=input.shift();
    let currLine=input.shift();
    while(currLine!="Generate"){
        let tempMessage='';
        let tokens=currLine.split('>>>');
        let command=tokens[0];
        if(command==="Contains"){
            if(activationKey.includes(tokens[1])){
                console.log(`${activationKey} contains ${tokens[1]}`)
            }else {
                console.log(`Substring not found!`)
            }
        }else if(command==='Flip'){
            let changedCase=tokens[1];
            let startIndex=tokens[2];
            let endIndex=tokens[3];
            if(changedCase=="Upper"){
                let substring=activationKey.substring(startIndex,endIndex);
                activationKey=activationKey.replace(substring,substring.toUpperCase());
            }else {
                let substring=activationKey.substring(startIndex,endIndex);
                activationKey=activationKey.replace(substring,substring.toLowerCase());
            }
            console.log(`${activationKey}`);
        }else if(command==="Slice"){
                let p1=Number(tokens[1]);
                let p2=Number(tokens[2]);
                let replacement=activationKey.substring(p1,p2);
                activationKey=activationKey.replace(replacement,'');
                console.log(activationKey);
        }
        currLine=input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`)
}
activationKey((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]))
console.log(`---`);
activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])