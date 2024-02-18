function smallestTwoNumbers(arr){
    let sortInAscending=arr.sort((a,b)=>a-b);
    let output=arr.slice(0,2).join(' ');
    console.log(output);
}
smallestTwoNumbers([30, 15, 50, 5])