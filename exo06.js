let read = require("readline-sync");

var Calculatrice = function(num1, num2, op) {
    this.x = parseInt(num1);
    this.y = parseInt(num2);
    this.op = op;

    this.result = function() {
        var x = this.x;
        var y = this.y;
        var op = this.op;

        if (op === "+") {
            var result = x + y;
        } else if (op === "-") {
            var result = x - y;
        } else if (op === "/") {
            var result = x / y;
        } else if (op === "*") {
            var result = x * y;
        } else if (op === "%") {
            var result = x % y;
        } else {
            var result = "Error!"
        }

        console.log("Result: " + result);
    };
}

var num1 = read.questionFloat("Please enter a number: ");
var op = read.question("Please enter an operator: ");
var num2 = read.questionFloat("Please enter another number: ");

var calc = new Calculatrice(num1, num2, op);

calc.result();