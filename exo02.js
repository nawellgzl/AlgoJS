// ADDITION

// Consigne : 
// Écrivez un programme pour saisir deux nombres de l'utilisateur et calculer leur somme. 
// L'utilisateur doit donc entrer deux valeurs, puis le programme calcule leur somme.


let read = require("readline-sync");

let nbr1 = read.questionFloat("Entrez un premier nombre :");
let nbr2 = read.questionFloat("Entrez un deuxieme nombre :");

console.log(`La somme des 2 nombres saisis est ${nbr1+nbr2}`);
