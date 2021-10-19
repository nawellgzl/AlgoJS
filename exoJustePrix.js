let read = require("readline-sync");

var max = read.question("Entrer une valeur maximale : ");
var essai = read.questionInt("Entrer un nombre de vies max : ");
var cible = Math.floor(Math.random() * max) + 1;
var nombre, i;
for (i = 1; i <= essai; i += 1) {
    nombre = parseInt(read.question("donnez un chiffre:"));
    if (nombre === cible) {
        console.log("Bravo");
        break;
    } else if (nombre > cible) {
        console.log("trop grand");
    } else if (nombre < cible) {
        console.log("trop petit");
    } else {
        console.log("ce n'est pas un chiffre");
        i -= 1;
    }
}
console.log("C'est fini! le chiffre à trouver était : " + cible);