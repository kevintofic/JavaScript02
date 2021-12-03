console.log(`Trabalhando Com Listas`);


const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
    );
console.log(listaDeDestino);

listaDeDestino.push(`Curitiba`); // adicionando itens a lista dinamicamente
console.log(listaDeDestino);

listaDeDestino.splice(1,1);
console.log(listaDeDestino);
console.log(listaDeDestino[2], listaDeDestino[1]);