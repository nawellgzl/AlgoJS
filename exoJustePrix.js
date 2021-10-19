let read = require("readline-sync");

var max = read.question("Entrer une valeur maximale : ");
var essai = read.questionInt("Entrer un nombre de vies max : ");
var cible = Math.floor(Math.random() * max) + 1;
var nombre, compteur;
for (compteur = 1; compteur <= essai; compteur += 1) {
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
        compteur -= 1;
    }
}
console.log("c'est fini. le chiffre cherche est : " + cible);