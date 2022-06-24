const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

notas.push(6.3);
console.log(notas);

console.log(notas.length);

for (let notas = 0; notas <= 1; notas++) {
    console.log(`notas = ${notas}`);
}

if (notas === 10) {
    notas.splice(0, 1, "9.0");
    console.log(notas);
} else if (notas === 6.3) {
    console.log(notas.length-1);
}