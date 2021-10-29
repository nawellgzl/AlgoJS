// DRÔLE DE PYRAMIDE

// Consigne : 
// Adaptez l'exercice 8 pour faire descendre l'escalier dans l'autre sens afin de former une pyramide


let read = require("readline-sync");

const SYMBOLE = "*";

function Triangle(nbLignes) {
    let strTriangle = "";
    for (let i = 1; i <= nbLignes; i++) {
        strTriangle = SYMBOLE.repeat(i);
        console.log(strTriangle);
    }
    for (let j = nbLignes; j > 0; j--) {
        strTriangle = SYMBOLE.repeat(j);
        console.log(strTriangle);
    }
}

let n = read.questionInt("Entrez un nombre Entier :");
n = parseInt(n);
Triangle(n);
