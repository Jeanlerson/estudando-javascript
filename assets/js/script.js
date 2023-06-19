//Elementos
const input = document.querySelector('.text');
const lista = document.querySelector('ul');

//Funções
function novo(e){
    if(e.key === 'Enter'){
        
        //Adicionar elemento LI na lista
        const newLi = document.createElement('li')
        newLi.innerText = input.value
        lista.appendChild(newLi)

        // Limpar campo de texto
        input.value = ' '
    }
}

//Eventos
input.addEventListener('keyup', novo)

//---------------------------------------------
let carro = "ferrari";
console.log("Tipo de carro: " + carro);

let valorBolo = "19.99";
console.log("preço do bolo: " + valorBolo);

let cidade = "SP";
console.log("Cidade " + cidade);

let x = 10;
let y = 5;

console.log(x !== y);

let w = "10";
let z = 10;

console.log(w === z);

let a = 10;
let b = 5;

console.log(a !== b);

let preco = 45.3;

if(preco <= 45) {
    console.log("O preço da carne está barata");
} else {
    console.log("O preço da carne está caro")
}

//----------------------------------------------
function pct(v, f) {
    return (f/v) * 100;
}

let v = 40;
let f = 10;


let calcPct = pct(v, f);

console.log(`${calcPct}% de ${v} é ${f}`);

//---------------------------------------------
function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let valor = 0;

    switch (quartos){
        case 1:
            valor = (m2 * 1) * metragem;
            break;
        case 2:
            valor = (m2 * 1.2) * metragem;
            break;
        case 3:
            valor = (m2 * 1.5) * metragem;
            break;
    }
    return valor;
}

let metragem = 123;
let quartos = 3;
let valor = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${valor}`);

//----------------------------------------------
function validar(usuario, senha){
    if(usuario === "pedro" && senha === 1234) {
        return true
    } else {
        return false
    }
}

let usuario = "bonieky";
let senha = "1234";

let validacao = validar(usuario, senha);
if (validacao) {
    console.log("Acesso concedido.")
} else {
    console.log("Acesso negado!")
}

//EXERCICIO DE ARRAY
let carros = ["BMW", "FERRARI", "MERCEDES"];
let car = 1;
console.log("1. " + carros[car]);

carros[1] = "AUDI";
console.log("2. Lista com AUDI:");
console.log(carros);

carros.push("VOLVO");
console.log("3. Lista com VOLVO:");
console.log(carros);

console.log("4. itens no array:");
console.log(carros.length)