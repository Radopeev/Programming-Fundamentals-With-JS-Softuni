function worldTour(input){
    let tour=input.shift();
    while(input[0]!="Travel"){
        let [command,index,string]=input.shift().split(":");
        let tempTour="";
        if(command=="Add Stop"){
            index=Number(index);
            if(index>=0 && index<=tour.length){
            tempTour=tour.split("");
            tempTour.splice(index,0,string);
            tour=tempTour.join(""); 
            }
        }else if(command=="Remove Stop"){
            index=Number(index);
            string=Number(string);
            if((index>=0 && index<=tour.length)&&(string>=0 && string<=tour.length)){
                tour = tour.split('');
                tour.splice(index, string - index + 1);
                tour = tour.join('');
        }
        }else if(command=="Switch"){
            while(!tour.includes(index)){
                tour.replace(index,string);
            }
        }
        console.log(tour);
    }
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}
worldTour((["Hawai::Cyprys-GreeceHawai",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))
console.log("----")
worldTour(['Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'])