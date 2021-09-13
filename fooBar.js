let number = '';
let oldDiv = '';
let container = '';
let outputDiv = '';
let i = 0;
let results = [];
/**
 * General function that deals with tha html elements.
 */
function General(){
    //getting the number from html
    number = document.getElementById("num").value;
    container = document.getElementById("container");
    //creating the new output div
    outputDiv = document.createElement("div");
    outputDiv.setAttribute("id","output");
    //getting the existing output div if there is one
    oldDiv = document.getElementById("output");
    //checking if there is an old div
    if(oldDiv !== null){
        oldDiv.parentElement.removeChild(oldDiv);
    }
    i = 0;
}

/**
 * Create the error message
 */
function NoProperValue(){
    const p = document.createElement("p");
    const text = document.createTextNode("Please enter a number.");
    p.appendChild(text);
    outputDiv.appendChild(p);
}

/**
 * Check foo-bar conditions and create the result
 */
function FooBarCheck(){
    let result = '';

    if( i % 2 === 0 ){
        result += 'foo ';
    }

    if( i % 3 === 0 ){
        result += 'bar';
    }

    if(result === ''){
        result = i;
    }

    //creating the elements that are going to contain the result
    const para = document.createElement("p");
    const node = document.createTextNode(result);
    para.appendChild(node);
    outputDiv.appendChild(para);
}

/**
 * Check foo-bar conditions and create the array result
 */
function ArrayFooBar(){

    if(i % 2 === 0 &&  i % 3 === 0){
        results.push('foo bar')
    }else if( i % 2 === 0 ){
        results.push('foo');
    }else if( i % 3 === 0 ){
        results.push('bar');
    }else{
        results.push(i);
    }

    const para = document.createElement("p");
    const node = document.createTextNode(results[i-1]);
    para.appendChild(node);
    outputDiv.appendChild(para);
}

/**
 * Foo-bar for loop
 */
function ForFooBar(){
    General();
    results = [];
    //checking if number var is actiolly a number
    if(number && !isNaN(number)){

        for(i = 1 ; i <= number ; i++ ){
            ArrayFooBar();
        }

    }else{
        NoProperValue();
    }
    container.appendChild(outputDiv);
}

/**
 * Foo-bar do while loop
 */
function DoWhileFooBar(){
    General();
    //checking if number var is actiolly a number
    if(number && !isNaN(number)){

        do{
            i+=1;
            FooBarCheck();
        }while(i<number);

    }else{
        NoProperValue();
    }
    container.appendChild(outputDiv);
}

/**
 * Recursion method for the RecursiveFooBar
 */
function Recursion(){
    if(i<number){
        i+=1;
        FooBarCheck();
        Recursion();
    }
}

/**
 * Recursive foo-bar
 */
function RecursiveFooBar(){
    General();
    //checking if number var is actiolly a number
    if(number && !isNaN(number)){
        Recursion();
    }else{
        NoProperValue();
    }
    container.appendChild(outputDiv);
}
