let soma = 0;
let numero = -1;
do {
    numero = parseInt(pronpt ("digite um numero: "));
    soma = soma + numero;
    alert("A soma é: " + soma);
} while (numero !== -1);