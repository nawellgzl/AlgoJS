let read = require("readline-sync");

const SYMBOLE = "*";

function Triangle(nbLignes) {
    let strTriangle = "";
    for (let i = 1; i <= nbLignes; i++) {
        strTriangle = SYMBOLE.repeat(i);
        console.log(strTriangle);
    }
}

let n = read.questionFloat("Entrez un nombre :");
Triangle(n);