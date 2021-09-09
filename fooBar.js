function FooBar(){
    let number = document.getElementById("num").value;//getting the number from html
    const container = document.getElementById("container");
    const oldDiv = document.getElementById("output");//getting the existing output div if there is one
    const outputDiv = document.createElement("div");//creating the new output div

    outputDiv.setAttribute("id","output");
    
    //checking if there is an old div
    if(oldDiv!=null){
        oldDiv.parentElement.removeChild(oldDiv);
    }

    //checking if number var is actiolly a number
    if(!isNaN(number)){
        //foobar logic
        for( i = 1 ; i <= number ; i++ ){
            let result = '';
    
            if( i % 2 === 0 ){
                result += 'foo';
            }
    
            if( i % 3 === 0 ){
                result+='bar';
            }
    
            if(result == ''){
                result = i;
            }
    
            //creating the elements that are going to contain the result
            const para = document.createElement("p");
            const node = document.createTextNode(result);
            para.appendChild(node);
            outputDiv.appendChild(para);
        }
        
    }else{//DOESNT WORK PROPERLY I DONT KNOW WHY
        const p = document.createElement("p");
        const text = document.createTextNode("Please enter a number.");
        p.appendChild(text);
        outputDiv.appendChild(p);
    }
    container.appendChild(outputDiv);
    
}