/* //Elementos
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

//-------------------------------------------------------

let colors = [
    'verde', 'vermelho', 'azul', 
    ['carro', 'moto', 'bike']
]
let veiculo = colors[3]

console.log(colors)

//------------------------------------------------------------------

let personagem = {
    nome: 'Jeanlerson',
    sobrenome: "Santos",
    idade: 18,
    pais: "Brasil",
    olhos: ['pretos', 'castanhos'],
    caracteristicas: {
        forca: 10,
        velocidade: 5,
        altura: 1.85
    },
    nomeCompletoDoPrsg: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}
console.log(personagem);
console.log(personagem.nomeCompletoDoPrsg());


//------------------------TABUADA---------------------------------------
for (let n = 1; n < 10; n++) {
    console.log(`Tabuada do: ${n}`)
    for(let num = 1; num <= 10; num++) {
        calc = n * num;
        console.log(`${n} x ${num} = ${calc}`)
    }
}

//------------------------------LOOP for--------------------------------

let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 15},
    {nome: 'vermelho', qt: 3}
];

for (let n = 0; n < cores.length; n++) {
    console.log(cores[n].nome + '-' + cores[n].qt);
}

for (let i in cores) {
    console.log(`${cores[i].nome} - ${cores[i].qt}`);
}

for (let cor of cores) {
    console.log(`${cor.nome.toUpperCase()} - ${cor.qt}`);
}

//------------------------------LOOP WHLE-------------------------------

let numero = 0;
while(numero < 10){
    console.log(numero)
    numero++
}

//---------------------------------------------------------------------

let fruits = ['Maça', 'Uva', 'Banana'];
for(let fruta of fruits){
    console.log(`Fruta: ${fruta}`)
}
let vh = fruits.join(", ")
console.log(vh)

let j = 1;
while(j <= 100){
    console.log(j)
    j++;
}

let clicar = document.querySelector(".botao")
function clicou(){
    const ul = document.querySelector('#ul')
    const newText = document.querySelector('.text')

    let newLi = document.createElement('li')
    newLi.innerText = newText.value

    ul.appendChild(newLi)
    newText.value = " "

    console.log('CLICOU EM MIM')
}

clicar.addEventListener("click", clicou)


let mostrarSenha = document.querySelector('.mostrar_senha')
function apertou(){
    const senha = document.querySelector('.senha')
    
    if (senha.getAttribute('type') === 'text') {
        senha.setAttribute('type', 'password');
        mostrarSenha.innerText = 'Mostrar Senha'
        mostrarSenha.style.backgroundColor = '#00f';
    } else {
        senha.setAttribute('type', 'text');
        mostrarSenha.innerText = 'Ocultar Senha'
        mostrarSenha.style.backgroundColor = '#f00';
    }
}*/

//-------------------EVENTOS DE TECLADO------------------------------

function apertou(event){
    console.log('APERTOU!');
    console.log(event.key);
    console.log('----------');
}

function segurou(event){
    console.log('SEGUROU!');
    console.log("----------");
}

function soltou(event){
    console.log('SOLTOU!');
    console.log(event.code);
    console.log('----------');
    console.log(`APERTOU TECLA: ${event.code}`);
    console.log(`APERTOU SHIFT? ${event.shiftKey}`);
    console.log('----------');
}