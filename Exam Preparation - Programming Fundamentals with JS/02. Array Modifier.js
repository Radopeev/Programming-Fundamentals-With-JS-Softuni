function modifier(input){
    let array=input.shift().split(' ').map(Number);
    let i=0;
    while(input[i]!=="end"){
        let tokens=input[i].split(' ');
        let index1=Number(tokens[1]);
        let index2=Number(tokens[2]);
        if(tokens[0]==="swap"){
            let temp=array[index1];
            array[index1]=array[index2];
            array[index2]=temp;
        }else if(tokens[0]==="multiply"){
            array[index1]=array[index1]*array[index2];
        }else if(tokens[0]==="decrease"){
            for(let j=0;j<array.length;j++){
                array[j]--
            }
        }
        i++;
    }
    console.log(array.join(', '));
}
modifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])