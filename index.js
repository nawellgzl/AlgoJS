let read = require("readline-sync");

let prenom = read.question("Quel est votre prénom?");
let age = read.questionInt("Entrez votre age :");
console.log(prenom);
console.log(age);