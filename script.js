
let buttons = document.querySelectorAll('button');
let operator = '';
let num1 = '';
let num2 = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonText = button.textContent;

        if (buttonText === 'C') {
            display.value = '';
            num1 = '';
            num2 = '';
            operator = '';
        } else if (buttonText === '=' && num1 && num2 && operator) {
            let result = calculate(num1, num2, operator);
            display.value = result;
            num1 = result;
            num2 = '';
            operator = '';
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            operator = buttonText;
            num1 = display.value;
            display.value = '';
        } else {
            display.value += buttonText;
        }
    });
});

function calculate(num1, num2, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
    }

    return result;
}
