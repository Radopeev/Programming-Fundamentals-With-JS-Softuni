function processOddNumbers(input){
    let output = input.filter((x,i) => i%2==1).map(x=>x*2).reverse().join(' ');
    console.log(output);
}
processOddNumbers([10, 15, 20, 25])