function countString(text,word){
    console.log(text.split(' ').filter( x=> x==word).length);
    
}
countString('This is a word and it also is a sentence','is')