function extractEmails(input){
    let regex=/(?<!\S)[a-zA-Z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
    let result=input.match(regex);
    for(let line of result){
        console.log(line);
    }
}
extractEmails('Please contact us at: support@github.com.')