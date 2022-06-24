const valorNumerico = prompt("Digite aqui um número: ");
console.log(valorNumerico);

const par = valorNumerico%2;


if (par == 0) {
    console.log(` ${valorNumerico} é par`);
}
else {
    console.log(` ${valorNumerico} é impar`);
}