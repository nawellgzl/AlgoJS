// FIZZ BUZZ

// Contexte : 
// Le Fizz Buzz est un exercice très courant dans l'informatique.
// Vous pourrez être confronté à cet exercice pour un entretien d'embauche.
// L'exercice n'est pas bien difficile mais l'employeur vérifiera la méthode que vous avez utilisé, le temps que vous avez mis ainsi que votre réflexion sur le problème posé.


let read = require("readline-sync");

var X = read.questionInt("Entrer un nombre : ");

for (i = 0; i < X;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
