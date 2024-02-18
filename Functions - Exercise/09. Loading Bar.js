function loadingBar(num){
    function isComplete(num){
        if(num===100){
            return true;
        }else {
            return false;
        }
    }
    function bar(num){
        let n=num/10;
        let arrOfSymbols=[];
        for(let i=0;i<n;i++){
            arrOfSymbols.push('%');
        }
        return arrOfSymbols;
    }
    function leftOfBar(num){
        let n=num/10;
        let arrOfSymbols=[];
        for(let i=0;i<10-n;i++){
            arrOfSymbols.push('.');
        }
        return arrOfSymbols;
    }
    let loadBar=bar(num);
    let leftOfLoadBar=leftOfBar(num);
    if(isComplete(num)){
        console.log(`100% Complete!\n[%%%%%%%%%%]`);
    }else {
        console.log(`${num}% [${loadBar.join('')}${leftOfLoadBar.join('')}]`)
        console.log('Still loading...')
    }
}
loadingBar(30)
loadingBar(100)