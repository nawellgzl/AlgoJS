// BIENVENUE

// Consigne : 
// Ecrire un programme qui demande à l'utilisateur de saisir son nom et de lui afficher son nom avec le message de bienvenu.


let read = require("readline-sync");
let prenom = read.question("Identification, veuillez saisir votre prenom");

console.log(`Hello ${prenom}`);
