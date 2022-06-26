/*
Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.
Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> O seu produto deve ser vendido por R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> O seu produto deve ser vendido por R$ 27,30
*/

const valorProduto= parseInt(prompt("Digite aqui o valor do produto: "));
console.log('O valor em reais do produto é: ' + valorProduto);

const compra1 = valorProduto * 0.45; 
console.log("Total da compra com lucro de 45% em cima do produto: " + compra1);

const compra2 = valorProduto * 0.30;
console.log("Total da compra com lucro de 30% em cima do produto: " + compra2);

const lucro1 = compra1 + valorProduto;
console.log("O lucro obtido com 45% de acréscimo é de: " + lucro1);

const lucro2 = compra2 + valorProduto;
console.log("O lucro obtido com 30% de acréscimo é de: " + lucro2);

if( valorProduto < 20){
    console.log(`O produto deve ser vendido à ${lucro2} reais.`);
}
else{
    console.log(`O produto deve ser vendido à ${lucro1} reais.`);
}