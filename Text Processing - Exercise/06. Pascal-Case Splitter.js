function pascalCaseSplitter(text){
    let words=[];
    let currentWord=text[0];
    for(let index=1;index<text.length;index++){
        if(text[index].toUpperCase() !== text[index]){
            currentWord=currentWord.concat(text[index]);
        }else {
            words.push(currentWord);
            currentWord=text[index];
        }
    }
    words.push(currentWord);
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')