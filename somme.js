// SOMME

// Écrivez un programme qui demande à l'utilisateur de saisir un nombre "N".
// Calculer la somme de tous les nombres entre 1 et N

let read = require("readline-sync");

function numSum(n) {
    var sum = 0;
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum)
}

let n = read.questionFloat("Entrez un nombre :");
numSum(n);
