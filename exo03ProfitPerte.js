let read = require("readline-sync");

function CA(fabr, vente) {
    if (fabr < vente) {
        return `Profit de ${vente - fabr}`;
    } else if (fabr === vente) {
        return `Profit nul`;
    }
    return `Perte de ${fabr-vente} €`;
}


let fabr = read.questionFloat("Entrez le coût de Fabrication :");
let vente = read.questionFloat("Entrez le prix de Vente:");

console.log(CA(fabr, vente));