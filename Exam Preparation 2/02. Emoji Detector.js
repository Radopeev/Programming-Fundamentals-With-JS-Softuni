function emojiDetector(input){
    let pattern=/([:]{2}|[*]{2})(?<word>[A-Z][a-z]{2,})\1/g;
    let pattern2=/\d/g;
    let match=null;
    let str=input.shift();
    let threshold=1;
    let coolEmojis=[];
    let emojiCount=0;
    while(match=pattern2.exec(str)){
        threshold=threshold*Number(match);
    }
    console.log(`Cool threshold: ${threshold}`)
    while(match=pattern.exec(str)){
        emojiCount++;
        let coolness=0;
        let word=match.groups['word'].split('');
        for(let i=0;i<word.length;i++){
            let num=word[i].charCodeAt(0);
            coolness+=num;
        }
        if(coolness>threshold){
            coolEmojis.push(match[0]);
        }
    }
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`)
    for(let i=0;i<coolEmojis.length;i++){
        console.log(`${coolEmojis[i]}`);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])