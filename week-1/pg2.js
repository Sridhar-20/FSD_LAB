
let num1, num2, operation;
num1=10;
num2=20;
operation="add"
let result;
switch (operation) {
    case "add":
        result = add(num1, num2);
        break;
    case "sub":
        result = subtract(num1, num2);
        break;
    case "mul":
        result = multiply(num1, num2);
        break;
    case "div":
        result = divide(num1, num2);
        break;
    default:
        result = "Invalid operation!";
}
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}

function div(a, b) {
    if (b === 0) {
        return "Division by zero is not allowed.";
    }
    return a / b;
}

console.log(`Result: ${num1} ${operation} ${num2} == ${result}`);
