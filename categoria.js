const idade = 4;

if(idade >= 5 && idade <= 7) {
    console.log("Infantil A");
} else if(idade >= 8 && idade <= 11) {
    console.log("Infantil B");
} else if(idade >= 12 && idade <= 13) {
    console.log("Juvenil A");
} else if(idade >= 14 && idade <= 17) {
    console.log("Juvenil B");
} else if(idade >= 18) {
    console.log("Adulto");
} else {
    console.log("Você ainda não tem idade para competir!");
}