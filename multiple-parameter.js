function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(secondNumber, firstNumber);
console.log('result value: ', result);


function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

// biyog koro duita sonkha

function biyogTwoNumbers(num1, num2){
    let result = num1 - num2;
    return result;
}

let first = 20;
let second = 15;
let output = biyogTwoNumbers(first, second);
console.log(output)



// vabfol ber koro

function vagfolTwoNumbers(a, b) {
    let total = a / b;
    return total;
}

let vag1 = 27;
let vag2 = 9;
let outputV = vagfolTwoNumbers(vag1, vag2);
console.log('vagfol =',outputV)
