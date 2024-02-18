function furniture(input){
    let totalSum=0;
    console.log("Bought furniture:");
    for(let line of input){
        if(line==="Purchase"){
            break;
        }
        let pattern=/>>(?<name>[A-Za-z\s]+)<<(?<price>\d+.(\d+)?)!(?<quantity>\d+)/g;
        let result=pattern.exec(line);
        if(result!==null){
            totalSum+=+result.groups.price * +result.groups.quantity;
            console.log(result.groups.name);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}