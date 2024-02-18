function sumFirstAndLast(arr){
    let k=arr.length;
    let first =Number(arr.shift());
    let last = Number(arr.pop());
    let sum= first+last;
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])