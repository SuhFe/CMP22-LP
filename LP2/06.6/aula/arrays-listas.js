const marcaCarro = ["Ford", "Hyundai", "Fiat", "BMW", "Etios"];

/*encontra o elemento dentro do array*/
console.log(marcaCarro[2]);

/*conta quantos itens tem dentro do arrays*/
console.log (marcaCarro.length);

/*adicionar elementos ao final do array (push)*/
marcaCarro.push("Honda");
console.log (marcaCarro);

/*adicionar um elementos na ultima posição do array*/
marcaCarro[marcaCarro.length] = ("Volks")
console.log (marcaCarro);

/*remover elemento da arrays*/
marcaCarro.pop ()
console.log (marcaCarro);

console.log(marcaCarro);
console.log(marcaCarro.sort ());//organiza em ordem alfabetica os itens