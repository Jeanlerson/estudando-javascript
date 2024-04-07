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
}

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

const evento = document.querySelector('.evento')
const Ul = document.querySelector('#newUl')

function addLista(event){
    if(event.key === 'Enter'){
        let newLista = document.createElement('li');
        newLista.innerHTML = evento.value;
        
        Ul.appendChild(newLista)

        evento.value = ' '
    }
}

evento.addEventListener('keyup', addLista)

//----------------------TABELA------------------------------------
const inputNome = document.querySelector('#inputNome');
const inputSobrenome = document.querySelector('#inputSobrenome');
const thead = document.querySelector('thead')
const buttonEnviar = document.querySelector('#botaoEnviar')


function addTable(){
    let tr = document.createElement('tr');

    let newNome = document.createElement('th')
    newNome.innerHTML = inputNome.value;
        
    thead.appendChild(tr)
    tr.appendChild(newNome)

    inputNome.value = ' '


    let newSobrenome = document.createElement('th')
    newSobrenome.innerHTML = inputSobrenome.value;
        
    thead.appendChild(tr)
    tr.appendChild(newSobrenome)

    inputSobrenome.value = ' '
}

buttonEnviar.addEventListener('click', addTable)

//--------------------ORIENTAÇÃO A OBJETOS------------------------------

class Person{
    //--------------------Método Estático---------------------
    static hands = 2;
    static head = 1;
    //--------------------------------------------------------

    _age = 0;
    steps = 0;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep(){
        this.steps++;
    }

    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        } else{
            console.log('Idade não aceita. (Somente número)');
        }
    }

    sayHi(){
        console.log(`${this.fullName} diz Oi`)
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    get age(){
        return this._age
    }

    set age(x){
        if(typeof x == 'number'){
            this._age = x
        }
    }
}
//----------------------------Herança-----------------------------------
class Student extends Person{

    constructor(firstName, lastName, id){
        super(firstName, lastName);
        this.id = id;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let p01 = new Student('James', 'Santos', 1223);
p01.age = 19;

console.log(`${p01.fullName} tem ${p01.age} anos. Matrícula: ${p01.id}.
Ele possui ${Person.head} cabeça e ${Person.hands} mãos.`);

p01.sayHi();

console.log('-------------------------------------------------------');
//----------------------------------------------------------------------

let p1 = new Person('Jean', 'Santos');
let p2 = new Person('Maria', 'Silva');
let p3 = new Person('Pedro', 'Lucas');

p1.age = 30;

console.log(`P1 = ${p1.fullName} tem ${p1.age} anos.`);
console.log(`P2 = ${p2.fullName} tem ${p2.age} anos`);
console.log(`P3 = ${p3.fullName} tem ${p3.age} anos`);

p1.takeAStep();
p1.takeAStep();

console.log(`${p1.fullName} deu ${p1.steps} passos`)

//-----------------------Factory----------------------------------------
console.log('-------------------------------------');

function createPerson(firstName, lastName, age){
    let p = new Person(firstName, lastName);
    p.age = age;
    return p;
}

let p001 = createPerson('Lucas', 'Barros', 25);

console.log(`${p001.firstName} ${p001.lastName} tem ${p001.age} anos.`);


//------------------------FUNCIONAL FACTORY-----------------------------------
function createPerson2(name2, lastName2, age2){
    return{
        name2,
        lastName2,
        age2,
        getFullName(){
            return `${this.name2} ${this.lastName2}`;
        }
    }
}

let person1 = createPerson2('Jean', 'Santos', 18);
let person2 = createPerson2('James', 'Silva', 92);

console.log(person1.name2);
console.log(person1.getFullName());*/

//---------------------Herança------------------------------
/*
const defaultUser = {
    nameUser: '',
    emailUser: '',
    levelUser: 1
}

const user1 = {
    ...defaultUser,
    nameUser: 'Jean',
    emailUser: 'jean@gmail.com'
}

console.log(user1);

const adm1 = {
    ...defaultUser,
    nameUser: 'Júlio',
    emailUser: 'julio@gmail.com',
    levelUser: 3
}

console.log(adm1); */

/*
alert("Olá Mundo")

console.log("Olá Console")

let nome = "jeanlerson"
let idade = 19

console.log("vc é " + nome + " e tem " + idade)

console.log(typeof idade)

// 1º

let carro = "Ferrari"
console.log(carro)

// 2º

let preco = 19.99
console.log(preco)

// 3°

let cidade = "São Paulo"
console.log(cidade)

let firstName = "jeanlerson"
let lastName = "santos"

var nomeCompleto = firstName + " " + lastName
var nomeCompleto = `Meu nome é ${firstName} ${lastName}`
console.log(nomeCompleto)

let yearn = 59

if (yearn > 17) {
    console.log("vc é maior de idade")
} else {
    console.log("vc é menor de idade")
}

if (yearn < 18) {
    console.log("vc é um criança")
} else if (yearn >=18 && yearn < 60) {
    console.log("vc é um adulto")
} else if (yearn >= 60) {
    console.log("vc é um idoso")
}

// 1°
let x = 10
let y = 5

console.log(x != y)

// 2°
let w = "100"
let z = 10

console.log(w === z)

// 3°
let a = 10
let b = 5

console.log(a > b)

// 4°
let precoCarne = 40.3

if (precoCarne <= 45) {
    console.log(`O preço ${precoCarne} está barato`)
} else {
    console.log(`O preço ${precoCarne} está caro`)
}

let precoTernario = precoCarne <= 45 ? "Barato" : "Caro"
console.log(precoTernario)

let professional = "guardinha"

switch (professional) {
    case "fiscal" :
        console.log("blusa branca")
        break
    case "policial" :
        console.log("blusa preta")
        break
    case "bombeiro" :
        console.log("blusa vermelha")
        break
    default:
        console.log("blusa verde")
} */

function gravidade() {
    console.log("a gravidade do planeta é: ")
    console.log(9.8)
}

gravidade()

function somar(n1, n2) {
    let resultado = n1 + n2
    console.log("sua soma é " + resultado)
}

somar(10,20)

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

let completo = nomeCompleto("jeanlerson", "santos")
console.log(completo)

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

let idade = 50
let verificar = maiorDeIdade(idade)

if (verificar) {
    console.log("maior de idade")
} else {
    console.log("menor de idade")
}

// 1º Exercicio função
function calcPct(x, y) {
    return (y/x) * 100
}

let x = 200
let y = 10
let pct = calcPct(x, y)

console.log(`${pct}% de ${x} é ${y}`)

function calcularImovel(metragem, quartos) {
    let m2 = 3000
    let preco = 0 

    switch(quartos) {
        case 1 :
            preco = metragem * (m2 * 1)
            break
        case 2 :
            preco = metragem * (m2 * 1.2)
            break 
        case 3 :
            preco = metragem * (m2 * 1.5)
            break 
    }

    return preco
}

let metragem = 123
let quartos = 3
let preco = calcularImovel(metragem, quartos)

console.log(`A casa custa R$ ${preco}`)

function validar(usuario, senha) {
    if (usuario == "pedro" && senha === 123) {
        return true
    } else {
        return false
    }
}

let usuario = "jeanlerson"
let senha = 123
let validacao = validar(usuario, senha)

if (validacao) {
    console.log("acesso concedido")
} else {
    console.log("acesso negado")
}

const arrow = (j, m) => j + m
console.log(arrow(5, 20))

let count = 0
function add() {
    count++
}

add()
add()
console.log(count)

function addSquares(g, h) {
    /*function square(k) {
        return k * k
    }*/
    const square = (k) => {
        return k * k
    }

    let sqrG = square(g)
    let sqrH = square(h)
    return sqrG + sqrH
}

console.log(addSquares(20, 1))