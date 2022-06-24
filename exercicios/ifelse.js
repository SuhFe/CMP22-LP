const idade = 3;

if (idade >= 5 && idade <= 7) {
    console.log("infantil A");
} else if (idade >= 8 && idade <= 11) {
    console.log("infantil B");
} else if (idade >= 12 && idade <= 13) {
    console.log("juvenil A");
} else if (idade >= 14 && idade <= 17) {
    console.log("juvenil B");
} else if (idade >= 18) {
    console.log("Adulto");
} else {
    console.log("voce ainda não tem idade pra competir")
}