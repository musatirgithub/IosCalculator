const keys = document.querySelector('.keys');
const result = document.querySelector('.result');
const operation = document.querySelector('.operation');
let ended = false;

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operands = ['+', '-', 'x', '÷'];
const others = ['AC', '=', '.', '±', '%'];

document.querySelector('.keys').addEventListener('click', (event) =>{
    if (ended){
        result.innerText = '';
        ended = false;
        operation.classList.remove('ended');
    }
// this part is for DIGITS
if (digits.includes(event.target.innerText)){
    // this part limits the input length 
    if (operation.innerText.length < 5){
        // this part is for 0 
        if (event.target.innerText == 0 && operation.innerText != 0){
            operation.innerText += event.target.innerText;
        }
        // this part is for digits other than 0
        else {
            // this code prevents 0 at the beginning of a number 
            if (operation.innerText == '0'){
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

    } else {
        alert('You have reached the limit')
    }
}
// this part takes care of OPERANDS
else if (operands.includes(event.target.innerText)){
    if (operation.innerText != '' && result.innerText == ''){
        result.innerText = operation.innerText + event.target.innerText;
        operation.innerText = '';
        // this code works when our math operation is not the first one
    } else if(result.innerText != ''){
        mathOps(event.target);
    }
    // I'm plannnig to write a function here to manage math operations

}
// this part manages REST of the keys
else if (others.includes(event.target.innerText)){
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
        operation.innerText != '' && (operation.innerText = operation.innerText * (-1));
    }
    else if(event.target.innerText == '%'){
        if (operation.innerText.length < 5){
            operation.innerText = extensionReducer(Number(operation.innerText / 100));
        } else {
            alert('You have reached the limit');
        }
    }
    else if(event.target.innerText == '='){
        mathOps(event.target);
    }

}
})
// this function is used to manage basic math operations, button parameter checks clicked button. If = sign is clicked function retuns a result. If one of +, -, /, * operands are clicked retuns a semi result and user can continue to operations.
function mathOps(button){
    switch (result.innerText.slice(-1)) {
        case '+':
            if (button.innerText == '='){
                operation.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) + Number(operation.innerText));
                result.innerText = '';
                ended = true;
                operation.classList.add('ended');
            } else {
                result.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) + Number(operation.innerText)) + button.innerText;
                operation.innerText = '';
            }
            break;
        case '-': 
        if (button.innerText == '='){
            operation.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) - Number(operation.innerText));
            result.innerText = '';
            ended = true;
            operation.classList.add('ended');
        } else {
            result.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) - Number(operation.innerText)) + button.innerText;
            operation.innerText = '';
        }
            break;
        case '÷':
            if (button.innerText == '='){
                if (operation.innerText == 0 || operation.innerText == "Error") {
                    operation.innerText = 'Error';
                } else {
                    operation.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) / Number(operation.innerText));
                    result.innerText = '';
                    ended = true;
                    operation.classList.add('ended');
                }
            } else if (operation.innerText == 0 || operation.innerText == "Error") {
                operation.innerText = 'Error';
            }else {
                result.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) / Number(operation.innerText)) + button.innerText;
                operation.innerText = '';
            }
            break;
        case 'x':
            if (button.innerText == '='){
                if (operation.innerText != "") {
                    operation.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) * Number(operation.innerText));
                    result.innerText = '';
                    ended = true;
                    operation.classList.add('ended');
                }
            } else if (operation.innerText != ""){
                result.innerText = extensionReducer(Number(result.innerText.slice(0, -1)) * Number(operation.innerText)) + button.innerText;
                operation.innerText = '';
            }
            break;
    }
    
}

function extensionReducer(calculation){
if (calculation.toString().length > 9 && calculation.toString().includes('.')){
    return calculation.toPrecision(9);
} else {
    return calculation;
}
}  