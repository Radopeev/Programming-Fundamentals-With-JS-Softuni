function chatLogger(input){
    let chats=[];
    while(input!="end"){
        let tokens=input.shift().split(' ');
        let command=tokens.shift();
        let message1=tokens[0];
        let message2=tokens[1];
        switch(command){
            case "Chat":chat(chats,message1);break;
            case "Delete":deleting(chats,message1);break;
            case "Edit":edit(chats,message1,message2);break;
            case "Pin":pin(chats,message1);break;
            case "Spam":spam(chats,tokens);break;
        }
    }
    function chat(chats,message){
        chats.push(message);
    }
    function deleting(chats,message){
        for(let i=0;i<chats.length;i++){
            if(chats[i]===message){
                chats.splice(i,1);break;
            }
        }
    }
    function edit(chats,message,editedVersion){
        for(let i=0;i<chats.length;i++){
            if(chats[i]===message){
                chats.splice(i,1,editedVersion);break;
            }
        }
    }
    function pin(chats,message){
        for(let i=0;i<chats.length;i++){
            if(chats[i]===message){
                let pinnedMessage=chats.splice(i,1);
                chats.push(pinnedMessage);
                break;
            }
        }
    }
    function spam(chats,messages){
        for(let i=0;i<messages.length;i++){
            chats.push(messages[i]);
        }
    }
    console.log(chats.join('\n'));
}
chatLogger((["Chat Hello","Chat darling","Edit darling Darling","Spam how are you","Delete peter","Delete how","Pin Hello","end"]))
//chatLogger((["Hello","Delete John","Pin Hi","end"]))
//chatLogger((["Chat John","Spam Let's go to the zoo","Edit zoo cinema","Chat tonight","Pin John","end"]))