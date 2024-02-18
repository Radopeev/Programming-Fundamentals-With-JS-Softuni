function distinctArray(input){
    for(let i=0;i<input.length;i++){
        let currElement=input[i];
        for(let j=i+1;j<input.length;j++){
            let nextElement=input[j];
            if(currElement===nextElement){
                input.splice(j,1);
                j--;
            }
        }
    }
    console.log(input.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])