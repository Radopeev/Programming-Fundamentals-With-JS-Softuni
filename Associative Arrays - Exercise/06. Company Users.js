function companyUsers(input){
    let result={};
    for(let line of input){
        let [company,employee] = line.split(' -> ');
        if(!result.hasOwnProperty(company)){
            result[company]=new Set();
        }
        result[company].add(employee);
    }
    let sortedCompanies=Object.keys(result).sort((a,b)=> a.localeCompare(b));
    for(let company of sortedCompanies){
        console.log(company);
        let employess=Array.from(result[company]);
        console.log('-- '+employess.join('\n-- '));
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])