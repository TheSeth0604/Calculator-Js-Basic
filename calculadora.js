const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const process = document.querySelector('#process');
const pResult = document.querySelector('#result');


const calculateBtn = document.querySelector('#btnCalculate')

calculateBtn.addEventListener('click', calculate);

let numero1 = parseInt(number1.value);
let numero2 = parseInt(number2.value);


function calculate() {
    let result;
    switch (process.value) {
        case "+":
            result = numero1 + numero2;
            break;
        case "-":
            result = numero1 - numero2;
            break;
        case "*":
            result = numero1 * numero2;
            break;
        case "/":
            result = numero1 / numero2;
            break;
        default:
            break;
    }
    pResult.innerText = "Result: " + result;
}


