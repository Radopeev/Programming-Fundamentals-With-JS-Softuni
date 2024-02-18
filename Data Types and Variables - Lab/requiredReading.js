function requiredReading(currentBookPages,hourPages,days){
    let totalTime=currentBookPages/hourPages;
    let requiredHours=totalTime/days;
    console.log(requiredHours);
}
requiredReading(212,20,2)