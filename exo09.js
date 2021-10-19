let read = require("readline-sync");

const SYMBOLE = "*";

function Triangle(nbLignes) {
    let strTriangle = "";
    for (let i = 1; i <= nbLignes; i++) {
        strTriangle = SYMBOLE.repeat(i);
        console.log(strTriangle);
    }
    for (let i = nbLignes; i > 0; i--) {
        strTriangle = SYMBOLE.repeat(i);
        console.log(strTriangle);
    }
}


let n = read.questionInt("Entrez un nombre Entier :");
n = parseInt(n);
Triangle(n);