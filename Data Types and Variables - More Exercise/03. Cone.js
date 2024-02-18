function cone(radius,height){
    let slantHeight=Math.sqrt(radius*radius+height*height);
    let volume=(Math.PI*Math.pow(radius,2)*height)/3;
    let area=Math.PI*radius*(radius+slantHeight);
    //√(r2 + h2)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(3,5    )