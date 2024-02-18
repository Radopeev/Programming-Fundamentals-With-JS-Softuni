function passwordReset(input){
    let string=input.shift();
    while(input[0]!="Done"){
        let [command,p1,p2]=input.shift().split(' ');
        switch(command){
            case "TakeOdd":
                {let tempStr = [];
                    for (let i = 0; i < string.length; i++) {
                        if (i % 2 !== 0) {
                            tempStr.push(string[i]);
                        }
                    }
                    string = tempStr;
                    string=string.join('');
                    console.log(string);};break;
            case "Cut":
                {
                    p1=Number(p1);
                    p2=Number(p2);
                let replacement=string.substring(p1,p1+p2);
                string=string.replace(replacement,'');
                console.log(string)};break;
            case "Substitute":
                {
                    if(string.includes(p1)){
                    while(string.includes(p1)){
                        string=string.replace(p1,p2);
                    }
                    console.log(string);
                }else {
                    console.log(`Nothing to replace!`)
                }};break;
            default : console.log("error");
        }
    }   
    console.log(`Your password is: ${string}`) 
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]))