// TEMPERATURE

// Vous disposez d'une liste de températures (°C).
// Parcourez cette liste et affichez la température la plus proche de 0°C. 
// Si une température négative est aussi proche de 0 qu'une température positive, la valeur négative prend le dessus.


let read = require("readline-sync");

var temp;
var temperatures = [];

function Input() {
    while (true) {
        console.log("Entrer une temperature constatée (ou \"end\" pour terminer): ");
        temp = read.question("Temperature: ");
        if (temp === 'end') break;
        console.log("La température constatée est de ", temp, "°");
        temperatures.push(temp);
    }
}

function closestToZero(numbers) {
    if (!numbers.length) {
        return 0;
    }

    let closest = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (closest === 0) {
            closest = numbers[i];
        } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
            closest = numbers[i];
        } else if (numbers[i] < 0 && -numbers[i] < Math.abs(closest)) {
            closest = numbers[i];
        }
    }

    return "La temperature la plus proche de 0° constatée est de " + closest + "°";
}



Input();
console.log(temperatures);
console.log(closestToZero(temperatures));
