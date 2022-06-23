document.body.style.backgroundColor = 'lightblue';

// Declare Variables 
const num1  = parseInt(prompt("Enter First Number"));
const operation  = prompt(`Pick an Arithmetic Operator(+ - / *) :`);
const num2  = parseInt(prompt("Enter Second Number"));

// Determine the operator and Perform the appopariate Arithetic Calculation
if(operation == "+"){

    const solution = num1 + num2;
    const answer = alert(`Answer: ${num1} + ${num2} = ${solution}`);

} else if(operation == "-"){
    const solution = num1 - num2;
    const answer = alert(`Answer: ${num1} - ${num2} = ${solution}`);

}else if(operation == "*"){
    const solution = num1 * num2;
    const answer = alert(`Answer: ${num1} * ${num2} = ${solution}`);

}else if(operation == "/"){
    const solution = num1 / num2;
    const answer = alert(`Answer: ${num1} / ${num2} = ${solution}`);
}

