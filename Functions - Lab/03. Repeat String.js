function repeatString(string,n){
    let output="";
    for(let i=0;i<n;i++){
        output+=string;
    }
    return output;
}

console.log(repeatString('abc',3))