console.log(`Trabalhando Com Condicionais`);


const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);


const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;


console.log("Destinos Possiveis:");
console.log(listaDeDestino);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestino.splice(1, 1);

// } else if (estaAcompanhada == true) {
//     console.log("Comprador esta acompanhado");
//     listaDeDestino.splice(1, 1);

// } else {
//     console.log("Não é maior de Idade e não posso vender");

// }


if (idadeComprador >= 18 == estaAcompanhada == false)
{
    console.log("Boa Viagem !");
    listaDeDestino.splice(2, 1);

} else {

   console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa Viagem!");
}else{
    console.log("Voce não pode embarcar");
}

//formatação da estrutura alt+shift+f

console.log(listaDeDestino);


// console.log(idadeComprador >18);
// console.log(idadeComprador <18);
// console.log(idadeComprador >=18);
// console.log(idadeComprador <=18);
// console.log(idadeComprador ==18);