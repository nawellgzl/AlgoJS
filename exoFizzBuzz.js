let read = require("readline-sync");

var X = read.questionInt("Entrer un nombre : ");

for (i = 0; i < X;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)