function reverse(n,input){
    let slice=[];
    let output="";
    for( let i=0;i<n;i++){
        slice.push(input[i]);
    }
    for( let i=slice.length-1;i>=0;i--)
    {
        output+=" "+slice[i];
    }
    console.log(output);
}
reverse(3, [10, 20, 30, 40, 50])