// LA MONNAIE EUROPEENE

// Écrivez un programme qui demande à l'utilisateur de saisir un nombre décimal.
// Le programme doit renvoyer exactement le nombre de billets et de pièces qu'il faut pour obtenir ce nombre


let read = require("readline-sync");

var coins = new Array(500, 200, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01);
var X = read.questionFloat("Somme à rendre : ");
var ndx = coins.length,
    change = [];
while (ndx) change[--ndx] = 0; // Un tableau de zéro pour les pièces à rendre

while (X) {
    while (coins[ndx] <= X) {
        X -= coins[ndx];
        X = parseFloat(X.toFixed(2)); // Suppression des reliquats sinon => boucle infini
        change[ndx]++;
    }
    if (0.01 < coins[ndx]) ndx++;
}
var str = "Rendre ";
ndx = 0; // Construction de la chaîne réponse
while (ndx < coins.length) {
    let coupure = "billet"
    if (coins[ndx] < 5) coupure = "pièce";
    if (c = change[ndx]) str += c + ' ' + coupure + (1 < c ? 's' : '') + ' de ' + coins[ndx] + ' € ';
    ndx++
}
console.log(str);
