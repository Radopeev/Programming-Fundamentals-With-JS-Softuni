function numbers(input){
    let array=input.shift().split(' ').map(Number);
    function add(arr,value){
        arr.push(value);
    }
    function remove(arr,value){
        let indexOfValue=arr.indexOf(value);
        if(arr.includes(value)){
            arr.splice(indexOfValue,1);
        }
    }
    function replace(arr,value,replacement){
        let indexOfValue=arr.indexOf(value);
        if(arr.includes(value)){
            arr.splice(indexOfValue,1,replacement);
        }
    }
    function collapse(arr,value){
        for(let i=0;i<arr.length;i++){
            if(arr[i]<value){
                arr.splice(i,1);
                i=-1;
            }
        }
    }
    while(input!="Finish"){
        let tokens=input.shift().split(' ');
        let command=tokens[0];
        let value1=Number(tokens[1]);
        let value2=Number(tokens[2]);
        switch(command){
            case "Add":add(array,value1);break;
            case "Remove":remove(array,value1);break;
            case "Replace":replace(array,value1,value2);break;
            case "Collapse":collapse(array,value1);break
        }
    }
    console.log(array.join(' '));
}
//numbers((["1 4 5 19","Add 1","Remove 4","Finish"]))
numbers((["1 20 -1 10",
"Collapse 11",
"Finish"]))
