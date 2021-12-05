// PROFIT OU PERTE

// Écrivez un programme qui demande à l'utilisateur de saisir le prix de fabrication et le prix de vente d'un produit et vérifiez le profit ou la perte.
// Si le prix de fabrication est supérieur au prix de vente, il y a perte sinon profit.

let read = require("readline-sync");

function CA(fabr, vente) {
    if (fabr < vente) {
        return `Profit de ${vente - fabr}`;
    } else if (fabr === vente) {
        return `Profit nul`;
    }
    return `Perte de ${Math.abs(fabr-vente)} €`;
}


let fabr = read.questionFloat("Entrez le coût de Fabrication :");
let vente = read.questionFloat("Entrez le prix de Vente:");

console.log(CA(fabr, vente));
