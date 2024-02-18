function secretChat(input){
    let text=input.shift();
    let commands={
        InsertSpace,
        Reverse,
        ChangeAll,
    };
    while (input[0]!="Reveal"){
        let tokens=input.shift().split(':|:');
        let name=tokens[0];
        let p1=tokens[1];
        let p2=tokens[2];
        let command=commands[name];
        text=command(text,p1,p2);
    }
    console.log(`You have a new text message: ${text}`)
    function InsertSpace(text,index){
        let left=text.slice(0,index);
        let right=text.slice(index,text.length);
        let result=text=left+' '+right;
        console.log(result)
        return result;
    }
    function Reverse(text,subsring){
        let index=text.indexOf(subsring);
        if(index!=-1){
            let left=text.slice(0,index);
            let right=text.slice(index+subsring.length);
            let result=left+right+subsring.split('').reverse().join('');
            console.log(result);
            return result;
        }else {
            console.log("error");
            return text;
        }
    }
    function ChangeAll(text,subsring,replacement){
        let result=text.split(subsring).join(replacement);
        console.log(result);
        return result
    }
}
function InsertSpace(text,index){
    let left=text.slice(0,index);
    let right=text.slice(index,text.length);
    let result=text=left+' '+right;
    console.log(result)
    return result;
}
function Reverse(text,subsring){
    let index=text.indexOf(subsring);
    if(index!=-1){
        let left=text.slice(0,index);
        let right=text.slice(index+subsring.length);
        console.log(left, right);
        let result=left+right+subsring.split('').reverse().join('');
        return result;
    }else {
        console.log("error");
        return text;
    }
}
function ChangeAll(text,subsring,replacement){
    let result=text.split(subsring).join(replacement);
    return result
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])