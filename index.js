const readline = require('readline-sync');

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nome = readline.question("Digite o seu nome de herói e descubra sua classificação: ");
let XP = numeroAleatorio(0, 20000);
let classificacao = "";

if (XP < 1000) {
    classificacao = "Ferro";
} else if (XP <= 2000) {
    classificacao = "Bronze";
} else if (XP <= 5000) {
    classificacao = "Prata";
} else if (XP <= 7000) {
    classificacao = "Ouro";
} else if (XP <= 8000) {
    classificacao = "Platina";
} else if (XP <= 9000) {
    classificacao = "Ascendente";
} else if (XP <= 10000) {
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}

console.log(`Olá, ${nome}! Sua classificação é ${classificacao} com ${XP} XP.`);