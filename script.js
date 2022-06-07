let buttons = document.querySelector('.buttons');
let result = document.querySelector('.result');
let operation = document.querySelector('.operation');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operands = ['+', '-', '*', '/', '.'];

// asil kod blogu burasi olacak
buttons.addEventListener('click', (event) => {
    let input = event.target;
    let lastChar = operation.innerText.slice(-1);
//    firstCharOperand(input);
    dotChecker(input);
})

// input digit ise bu fonksiyon calissin
// ilk karakter 0 ise kaldiriyor ve arkadan . gelmiyorsa 

function firstZeroCheck (button){
    if (operation.innerText == '0' && digits.includes(button.innerText)){
        operation.innerText = button.innerText;
    } else{
        operation.innerText += button.innerText;
    }
};

// input operand ise bu fonksiyon calissin bu fonksiyon 

function duplicateOperand(lastChar, input){
   if (!operands.includes(lastChar) && operands.includes(input.innerText)){
    operation.innerText += input.innerText;
   }
};

// input operand ise bu fonksiyon calissin

function firstCharOperand(button){
     if (operation.innerText.length != 0){
        operation.innerText += button.innerText;
     }
}


// input esittir ise bu fonksiyon calissin

function integerCheck(){
    if (result.innerText%1){
        //burasi sayi integer degilse calisacak ve uzanti uzunlugunu toplam karakter sayisi 10 olacak sekilde ayarlayacak
        
        result.innerText = Number(result.innerText).toFixed(9 - result.innerText.indexOf('.'));
    } else {
        result.innerText = parseInt(result.innerText)
        console.log(result.innerText);
    }
}

// input nokta ise bu fonksiyon calissin. 
// buradaki kod operation icinde nokta varsa tekrar eklenmesine izin vermiyor
// ancak daha once nokta var ve sonrasinda +, -, *, / gelmisse izin veriyor

function dotChecker(button){
if (!(operation.innerText.lastIndexOf('.') > operation.innerText.lastIndexOf('+' || '-' || '*' || '/'))){
    //operation.innerText += button.innerText;
    console.log('true');
} else {
    console.log('false');
}
}

// input esittir ise bu fonksiyon calissin
// operation in son karakterinin +, -, *, / olmamasini saglar

function lastOperand(button){
if (operands.includes(operation.innerText.slice(-1))){
    operation.innerText = operation.innerText.slice(0, -1);
}
}