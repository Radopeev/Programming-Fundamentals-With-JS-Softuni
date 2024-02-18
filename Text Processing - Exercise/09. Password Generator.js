function passwordGenerator(input){
    let firstString=input[0];
    let secondString=input[1];
    let thirdString=input[2];
    let vowels=["a","e","i","o","u"]
    let combinedString=firstString.concat(secondString);
    let reversedPassword="";
    thirdString=thirdString.toLowerCase();
    let vowelIndex=0;
    for(let index=0;index<combinedString.length;index++){
        if(vowels.includes(combinedString[index])){
            let indexOfChar=vowelIndex %thirdString.length;
            vowelIndex++;
            let currChar=thirdString.charAt(indexOfChar);   
            reversedPassword+=currChar.toUpperCase(); 
        }else{
            reversedPassword+=combinedString[index];
        }
    }
    console.log(`Your generated password is ${reversedPassword.split('').reverse().join('')}`);

}
passwordGenerator(['ilovepizza', 'ihatevegetables','orange'])