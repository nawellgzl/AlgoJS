// CENTRALE DE TRI

// Vous disposez d'une liste de nombre.
// Triez la liste du plus petit au plus grand


let read = require("readline-sync");

var nbr;
var nombres = [];

function Input() {
    while (true) {
        console.log("Entrer un nombre pour remplir le tableau");
        nbr = read.question("nombre: ");
        if (nbr === 'end') break;
        nombres.push(nbr);
    }
    console.log("Tableau initial non trié : " + nombres)
}

//ordre croissant
function compare(x, y) {
    return x - y;
}

//ordre décroissant:
//function compare(x, y) {
//    return y - x;
//}

Input();
nombres.sort(compare);
console.log("Tableau trié par ordre croissant :" + nombres);
