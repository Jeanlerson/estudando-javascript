function maiorDeIdade(idade){
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 17;
let verificacao = maiorDeIdade(idade);

if(verificacao) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}

function calcPct(y, x) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(y, x);

console.log(`${pct}% de ${x} é ${y}`)

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }

    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`)


function validar(usuario, senha) {
    if (usuario = "pedro" && senha === "123") {
        return true;
    } else {
        return false;
    }
}

let usuario = 'bonieky';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}