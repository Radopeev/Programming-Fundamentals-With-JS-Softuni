function barcodes(input){
    let pattern=/(^@#{1,})(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;
    let n=input.shift();
    for(let i=0;i<n;i++){
        let str=input.shift();
        let barcode=[];
        if(str.match(pattern)){
            str=str.split('');
            for(let j=0;j<str.length;j++){
                if(str[j].charCodeAt(0)>=48 && str[j].charCodeAt(0)<=57){
                    barcode.push(str[j])
                }
            }
            if(barcode.length>0){
                console.log(`Product group: ${barcode.join('')}`);
            }else{
                console.log(`Product group: 00`);
            }
        }else{
            console.log(`Invalid barcode`)
        }
    }
}
barcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]))
console.log('---')
barcodes((["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]))