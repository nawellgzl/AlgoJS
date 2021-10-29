// FIZZ BUZZ

// Contexte : 
// Le Fizz Buzz est un exercice très courant dans l'informatique.
// Vous pourrez être confronté à cet exercice pour un entretien d'embauche.
// L'exercice n'est pas bien difficile mais l'employeur vérifiera la méthode que vous avez utilisé, le temps que vous avez mis ainsi que votre réflexion sur le problème posé.

// Consigne : 
// Demandez à l'utilisateur de saisir un nombre "N" .
// Afficher tous les nombres allant de 1 à "N", avec les particularités suivantes : 
// Remplacez tous les multiples de 3 par "FIZZ"
// Remplacez tous les multiples de 5 par "BUZZ"
// Remplacez tous les multiples de 3 ET 5 par "FIZZBUZZ"


let read = require("readline-sync");

var X = read.questionInt("Entrer un nombre : ");

for (i = 0; i < X;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
