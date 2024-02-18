function passwordValidator(password){
    function isLengthEnough(pass){
        let isLengthEnough=true;
        if(pass.length<6 || pass.length>10){
            isLengthEnough=false;
        }
        return isLengthEnough;
    }
    function isOnlyOfDigitsAndNumbers(pass){
        for(let currCharIndex of pass){ 
            let currChar=currCharIndex.charCodeAt(0);
            if( !(currChar>=48 && currChar<=57) && 
                !(currChar>=65 && currChar<=90) && 
                !(currChar>=97 && currChar<=122)){
                return false;
            }
        }
        return true;

}
    function isTwoDigits(pass){
        let isTwoDigits=true;
        let br=0;
        for(let i=0;i<pass.length;i++){
            let checker=pass.charCodeAt(i);
            if(checker>=48 && checker<=57){
                br++;
            }
            
        }
        return br>=2? true :false;
    }
    if(!isLengthEnough(password)){
        console.log(`Password must be between 6 and 10 characters`);
    }
    if(!isOnlyOfDigitsAndNumbers(password)){
        console.log(`Password must consist only of letters and digits`);
    }
    if(!isTwoDigits(password)){
        console.log(`Password must have at least 2 digits`);
    }
    if(isLengthEnough(password) && isOnlyOfDigitsAndNumbers(password) && isTwoDigits(password)){
        console.log(`Password is valid`);
    }
} 
passwordValidator('Pa$s$s')