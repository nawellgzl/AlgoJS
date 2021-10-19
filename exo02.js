let read = require("readline-sync");

let nbr1 = read.questionFloat("Entrez un premier nombre :");
let nbr2 = read.questionFloat("Entrez un deuxieme nombre :");

console.log(`La somme des 2 nombres saisis est ${nbr1+nbr2}`);