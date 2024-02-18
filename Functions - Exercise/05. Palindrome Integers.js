function palindromeIntegers(arr){
    function isPalindrome(num){
        let isPalindrome=false;
        let n=num.toString();
        let reversedN=num.toString().split("").reverse().join('');
        if(n===reversedN){
            isPalindrome=true;
        }
        return isPalindrome;
    }
    for(let i=0;i<arr.length;i++){
        if(isPalindrome(Number(arr[i]))){
            console.log('true');
        }else {
            console.log('false');
        }
    }
}
palindromeIntegers([123,323,421,121])