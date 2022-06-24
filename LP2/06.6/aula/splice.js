/*altera o conteudo de uma lista, adicionando novos elementos
enquanto remove elementos antigos (splice:fatiar)*/

const massa = ["Lasanha", "Pizza", "Macarao"]

massa.splice(1, 0, "nhoque");
console.log (massa);

massa.splice(2, 2, "a");
console.log (massa);