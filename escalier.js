// ESCALIER

// Écrivez un programme qui demande à un utilisateur un nombre puis qui génère un escalier d'étoiles.


let read = require("readline-sync");

const SYMBOLE = "*";

function Triangle(nbLignes) {
    let strTriangle = "";
    for (let i = 1; i <= nbLignes; i++) {
        strTriangle = SYMBOLE.repeat(i);
        console.log(strTriangle);
    }
}

let n = read.questionInt("Entrez un nombre Entier :");
n = parseInt(n);
Triangle(n);
