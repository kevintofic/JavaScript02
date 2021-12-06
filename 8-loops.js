console.log(`\n Trabalhando Com Condicionais`);


const listaDeDestino = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);


const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = true;
const destino = "Rio de Janeiro";


console.log("\n Destinos Possiveis:");
console.log(listaDeDestino);



const podeComprar = idadeComprador >= 20 == estaAcompanhada == true;

let contador = 0;
let destinoExiste = true;
while (contador <3){

    if (listaDeDestino [contador] == destino){
        destinoExiste = false;
        break;
    }
    contador += 1;
}

console.log("Destino Existe:", destinoExiste)

    if(podeComprar && destinoExiste){
console.log("Boa Viagem!");

 }else{
     console.log("Desculpe tivemos um erro");

 }
