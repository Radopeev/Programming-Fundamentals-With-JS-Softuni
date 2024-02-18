function matrix(num) {
 
    function lines(a) {
 
        let thelineOne = (a+' ').toString().repeat(a).split('').join('');
 
        return thelineOne + '\n';
    }
    
    function reps(ass) {
        for (let i = 1; i <= ass; i++) {
            return lines(ass).repeat(ass);
        }
 
    }
    return reps(num);
}
console.log(matrix(11));