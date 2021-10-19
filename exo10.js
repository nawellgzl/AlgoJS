let read = require("readline-sync");

function pyramid(n) {
    var output = "";
    for (var i = 0; i < n; i++) {
        var myspace = "";
        for (let s = 0; s < (n - i - 1); s++) {
            myspace += " ";
        }
        for (var j = 1; j <= 2 * i + 1; j++) {
            output += "*";

        }
        console.log(myspace + output);
        output = "";
    }
}

let n = read.questionInt("Entrez un nombre Entier :");
n = parseInt(n);
pyramid(n);