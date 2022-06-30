/*
    for(let i = 0; i <= 10; i++) 
    Leia: para i igual a zero, 
    enquanto i for menor ou igual a 10 
    execute o que tiver dentro do for 
    e some mais um a i
    
    SE LIGA 
    --
    Enquanto a condição for VERDADEIRA o código rodará novamente atualizando seu contador
    i++ é a mesma coisa que i = i + 1
    i-- é a mesma coisa que i = i - 1
*/

for(let i = 1; i <= 10; i+=2) {
    console.log(`i = ${i}`);
}


// Podemos utilizar o contador da maneira que quisermos
// incrementando ou decrementando de 1 em 1, de 1000 em 1000
// ou de 0.1 em 0.1

for(let i = 0.1; i < 1; i+=0.1) {
    console.log(`i = ${i}`);
}