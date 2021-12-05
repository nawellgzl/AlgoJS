// LE PROF

// Écrivez un programme pour un professeur flemmard.
// Vous disposez d'une liste de notes comprises entre 0 et 20
// Écrivez un commentaire pour chacune de ces copies d'élève


function notation(note) {
    if (note >= 18 && note <= 20) {
        console.log(` Excellent, bon travail`);
    } else if (note >= 15 && note <= 17) {
        console.log(` Bien`);
    } else if (note >= 11 && note <= 14) {
        console.log(` Peut mieux faire`);
    } else if (note >= 5 && note <= 10) {
        console.log(` Insuffisant`);
    } else if (note >= 0 && note <= 4) {
        console.log(`  Catastrophique, il faut tout revoir`);
    } else if (note > 20 || note < 0) {
        console.log("ERREUR veuillez entrer une note valide");
    }
}


let eleves = [
    { "Nawell": 14 },
    { "Fethi": 2 },
    { "Morgan": 16 },
    { "Ruben": 4 },
    { "Nicolas": 18 },
    { "Amandine": 17 },
    { "Berta": 20 }
];

for (var i = 0; i < eleves.length; i++) {
    for (var eleveid in eleves[i]) {
        var note = eleves[i][eleveid];
        console.log(eleveid + " : " + note);
        notation(note);
    }
}
