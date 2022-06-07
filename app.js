let keys = document.querySelector('.keys');
let result = document.querySelector('.result');
let operation = document.querySelector('.operation');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operands = ['+', '-', 'x', '÷'];
const others = ['AC', '=', '.', '±', '%'];

document.querySelector('.keys').addEventListener('click', (event) =>{
    // this part is for DIGITS
if (digits.includes(event.target.innerText)){
    // this part is for 0 
    if (event.target.innerText == 0 && operation.innerText != '0'){
        operation.innerText += event.target.innerText;
    }
    // this part is for digits other than 0
    else {
        // this code prevents 0 at the beginning of a number 
        if (operation.innerText == 0){
            operation.innerText = event.target.innerText
        }
        // this code shows .8 like 0.8 at the beginning of a number
        else if (operation.innerText == '.'){
            operation.innerText = '0.' + event.target.innerText;
        // this is for the rest
        } else {
            operation.innerText += event.target.innerText;
        }
    }
}
// this part takes care of OPERANDS
else if (operands.includes(event.target.innerText)){
    if (operation.innerText != '' && result.innerText == ''){
        result.innerText = operation.innerText + event.target.innerText;
        operation.innerText = '';
        // this code works when our math operation is not the first one
    } else if(result.innerText != ''){
        mathOps();
    }
    // I'm plannnig to write a function here to manage math operations

}
// this part manages rest of the keys
else if (others.includes(event.target.innerText))
    if (event.target.innerText == '.'){
        if (!(operation.innerText.includes('.'))){
            operation.innerText += '.';
        }
    }
    else if (event.target.innerText == 'AC'){
        result.innerText = '';
        operation.innerText = 0;
    }
    else if(event.target.innerText == '±'){
        operation.innerHTML = operation.innerHTML * (-1);
    }
    else if(event.target.innerText == '%'){
        operation.innerHTML = operation.innerHTML / 100;
    }
    else if(event.target.innerText == '='){
        mathOps();
    }
})

function mathOps(button){
    switch (result.innerText.slice(-1)) {
        case '+':
 //           if (button = '='){
                operation.innerText = Number(result.innerText.slice(0, -1)) + Number(operation.innerText);
 //           } else {
 //               result.innerText = Number(result.innerText.slice(0, -1)) + Number(operation.innerText);
 //           }
            break;
        case '-':
            operation.innerText = Number(result.innerText.slice(0, -1)) - Number(operation.innerText);
            break;
        case '÷':
            operation.innerText = Number(result.innerText.slice(0, -1)) / Number(operation.innerText);
            break;
        case 'x':
            operation.innerText = Number(result.innerText.slice(0, -1)) * Number(operation.innerText);
            break;
    }
    result.innerText = '';
}