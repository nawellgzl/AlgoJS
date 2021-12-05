// LE JUSTE PRIX

// Contexte : 
// Vous connaissez certainement le jeu télévisé de Vincent Lagaff nommé "Le Juste Prix" ?
// Une cagnotte remplie de cadeaux est proposée à un candidat qui arrive en finale.
// Tous ces cadeaux ont une valeur qui est cachée au candidat.
// Le candidat a 30 secondes pour deviner le prix exact du lot avec pour seule informations :
// C'est plus
// C'est moins

// Demandez à l'utilisateur de saisir un nombre de tentative pour simuler les "30 secondes".
// (Ce nombre de tentatives représentera le nombre d'échec possible)
// Générez un nombre aléatoire entre 0 et "N" saisie par l'utilisateur.
// Construisez le programme permettant de :
// Saisir un nombre
// Comparer le nombre avec le résultat attendu "N"
// Afficher "Plus" ou "Moins"
// Retirer une vie


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
