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

/*
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
    //function square(k) {
    //    return k * k
    //}
    const square = (k) => {
        return k * k
    }

    let sqrG = square(g)
    let sqrH = square(h)
    return sqrG + sqrH
}

console.log(addSquares(20, 1))

*/

/*
let colors = ["blue", "vermelho", "grean"]
console.log(colors[0])

let lista1 = [10, [20, 1]]
console.log(lista1[1][0])

let ingredientes = [
    "agua",
    "farinha",
    "ovo",
    "leite"
]

ingredientes.push("açucar") //adiciona

console.log(ingredientes)

console.log(`total de ingredientes: ${ingredientes.length}`)

ingredientes.pop() //remove o último
ingredientes.shift() //remove o primeiro

console.log(`novo total de ingredientes: ${ingredientes.length}`)

// 1º
let carros = ["bmw", "ferrari", "mercedes"]
let x = 1
console.log(`1. ${carros[x]}`)

//2º
carros[1] = "audi"
console.log(`2. lista com audi: ${carros}`)
console.log(carros)

//3º
carros.push("volvo")
console.log(`3. lista com volvo: ${carros}`)
console.log(carros)

//4º
console.log(carros.length)



let personagem = {
    nome: "jean",
    idade: 19,
    cor: "preto",
    olhos: ["preto", "castanho"],
    familia: {
        mae: "maria",
        pai: "edilson",
        irmao: "jean"
    }
}

console.log(`${personagem.nome} é ${personagem.cor} com ${personagem.idade} anos`)
console.log(personagem.olhos[1])
console.log(personagem.familia.mae)

personagem.nome = "joao"
personagem.idade += 2
personagem.olhos.push("verde")

console.log(personagem)

let pessoa = {
    nome: "jean",
    sobrenome: "santos",
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())

for (let n = 0; n < 10; n++) {
    console.log(+ n)
}

let cores = ["preto", "verde", "vermelho", "branco"]
cores.push("amarelo")

for (let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}

for (let n in cores) {
    console.log(cores[n])
}


for (let n of cores) {
    console.log(n)
}

let numero = 0
while (numero < 10) {
    numero++
    console.log(`O numero é ${numero}`)
}




//2º
let contar = 1
while (contar <= 100) {
    console.log(contar)
    contar++
}


//1º
let fruits = ["maça", "uva", "banana"]
for (fruta of fruits) {
    console.log(fruta)
}

fruits.sort() //ordena em ordem alfabética
fruits.reverse()

console.log(fruits.join("|"))

let cars = [
    {brand: "fiat", year: 2022},
    {brand: "ferrari", year: 2014},
    {brand: "mercedes", year: 2004},
    {brand: "lamborguine", year: 2024},
]

cars.sort((a, b) => a.year - b.year)
console.log(cars)
*/

/*
function clicou() {
    const input = document.querySelector(".input")
    const botao = document.querySelector(".botao")

    if(input.getAttribute("type") === "text") {
        input.setAttribute("type", "password")
        botao.innerHTML = "Mostrar Senha"
    } else {
        input.setAttribute("type", "text")
        botao.innerHTML = "Ocultar Senha"
    }

    
    const teste = document.querySelector("#teste")
    const ul = document.querySelector("ul")

    ul.innerHTML += "<li>Novo Número</li>"
    ul.children[0].innerHTML = "Novo Número"
    ul.children[2].append(" Novo Número")
    ul.append(" Novo Número")

    let newLi = document.createElement("li")
    newLi.innerText = "Item Novo"

    ul.appendChild(newLi)
    ul.prepend(newLi) //adiciona no começo

    let newUl = document.createElement("ul")

    for (let i = 1; i <= 5; i++) {
        let newLi = document.createElement("li")
        newLi.innerHTML = i + " Novo Número"

        newUl.append(newLi)
    }

    ul.after(newUl) 
}
*/

/*
let botao = document.querySelector(".botao")
botao.addEventListener("click", clicou)


function clicou() {
    const li = document.querySelector("li")
    li.style.backgroundColor = "blue"
    li.style.color = "red"

    let botao = document.querySelector(".botao")
    botao.classList.add("verde") // adicionar classe
    botao.classList.remove("verde") // remove
    botao.classList.toggle("verde") // intercala (sai e entra, entra e sai)
}
*/

/*
function apertou() {
    console.log("APERTOU")
}

function segurou() {
    console.log("SEGUROU")
}
*/

/*
function soltou(e) {    
    
    console.log(`Code= ${e.code}`) // mais detalhado
    console.log(`Key= ${e.key}`) // mais simples
    console.log("--")
    console.log(`Com SHIFT?= ${e.shiftKey}`) // verificação
    console.log(`Com CTRL?= ${e.ctrlKey}`)
    console.log(`Com ALT?= ${e.altKey}`)
    console.log("--")
    
    
    const ul = document.querySelector("ul")
    const newLi = document.createElement("li")
    const input = document.querySelector("input")


    if (e.key === "Enter") {
        newLi.innerHTML = input.value
        ul.appendChild(newLi)

        input.value = ""
    }
}

const input = document.querySelector("input")
input.addEventListener("keyup", soltou)
*/

/*
class Person {

    steps = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    takeASteps() {
        this.steps++
    }

    get age() {
        return this._age
    }

    set age(x) {
        if (typeof x == "number") {
            this._age = x
        } else {
            console.log("idade não aceita")
        }
    }
}

let p1 = new Person("jean", "santos")
let p2 = new Person("gessi", "chaves")
let p3 = new Person("eloá", "silva")

p1.age = 10

console.log(p1.age)

function clicou() {
    p1.takeASteps()
    console.log(p1.steps)
}

console.log(p1.fullName)

const botao = document.querySelector("button")
botao.addEventListener("click", clicou)
*/

/*
class Person {
    age = 0
    static hands = 2

    constructor(name) {
        this.name = name
    }
}

class Student extends Person {
    constructor(name, id, scholl) {
        super(name)
        this.id = id
        this.scholl = scholl
    }
}

p1 = new Student("jean", 14368, "UNOPAR")

p1.age = 19

console.log(`${p1.name} da matricula ${p1.id} da faculdade ${p1.scholl} tem ${p1.age} anos`)

console.log(`${p1.name} tem ${Student.hands} mãos`)

function createPerson(name, age, scholl) {
    let p = new Student(name)
    p.age = age
    p.scholl = scholl

    return p
}

let p2 = createPerson("arnaldo", 40, "PAD")
console.log(`${p2.name} tem ${p2.age} anos e estuda no ${p2.scholl}`)
*/
/*
let log = new Log(document.querySelector(".log"))

let char = new Knight("jean")
let monster = new BigMonster()

const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
)

stage.start()
*/
/*
function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,

        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

let person1 = createPerson("jean", "santos", 19)

console.log(person1.getFullName())

const defaultUser = {
    name: "",
    email: "",
    level: 2
}

let user1 = {
    ...defaultUser,
    name: "james",
    email: "james.com"
}

console.log(user1)
*/


/*
const char = creatKnigth("jeanNew")
const monster = creatBigMonster()

stage.start(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
)
*/



// https://jsonplaceholder.typicode.com/posts
function clicou() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        alert(`Título do Primeiro Post: ${json[0].title}`)
    })
    .catch(() => { // CATCH SERVE PARA AVISAR QUE DEU ERRO NA REQ
        alert("DEU PROBLEMA NA REQISIÇÃO")
    })
    .finally(() => { // EXECUTADO NO FINAL DE TUDO
        alert("Requisição Finalizada")
    })
}

function inserir() { // REQUISIÇÃO POST (INSERIR INFOR)
    fetch("https://jsonplaceholder.typicode.com/posts", 
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                title: "Titulo de Teste",
                body: "Corpo do Teste",
                userId: 2
            })
        }

    )
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
    })
}

document.querySelector("#botao").addEventListener("click", clicou)
document.querySelector("#inserir").addEventListener("click", inserir)