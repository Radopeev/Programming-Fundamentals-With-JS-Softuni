function materials(size,increment){
    let stone=0;
    let marble=0;
    let lapisLazuli=0;
    let gold=0;
    let steps=1;
    while(size>=1){
        if(size>2){
            if(steps%5===0){
                lapisLazuli+=size*4-4*increment;
            }else {
                marble+=size*4-4*increment;
            }
              steps++;
            stone+=Math.pow(size-2,2)*increment;
        }else {
            gold+=Math.pow(size,2)*increment;
        }
        size-=2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);
}
materials(11,0.75)